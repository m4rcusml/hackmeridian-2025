#![no_std]

use soroban_sdk::{Address, Env, IntoVal, Symbol, Vec, contract, contractimpl, vec};

mod deposit;
mod storage;
mod withdraw;
mod r#yield; // O módulo r#yield é importado aqui

#[contract]
pub struct FeeVaultContract;

#[contractimpl]
impl FeeVaultContract {
    // ... (outras funções como deposit, withdraw, etc., permanecem iguais)
    pub fn deposit(env: Env, user: Address, project: Symbol, amount: i128, yield_split: i128) {
        deposit::deposit(&env, &user, &project, amount, yield_split);
    }

    // --- FUNÇÃO SIMULATE_YIELD CORRIGIDA ---
    // A assinatura foi alterada para receber um único `user`.
    // Isso evita loops perigosos e garante que a transação não exceda os limites.
    // A lógica de iterar por todos os usuários deve ser feita fora da cadeia (off-chain).
    pub fn simulate_yield(env: Env, total_yield: i128, user: Address) {
        // Validação de segurança: apenas o usuário pode acionar seu próprio cálculo de rendimento.
        user.require_auth();

        // Buscamos os projetos do usuário a partir do storage.
        let user_projects = storage::get_user_projects(&env, &user);

        // Chamamos a função auxiliar do nosso módulo `yield`.
        r#yield::distribute_yield_for_user(&env, total_yield, &user_projects, &user);
    }

    // ... (resto das suas funções `get_`, `withdraw`, etc.)

    pub fn withdraw(env: Env, user: Address, project: Symbol, value: i128) -> i128 {
        withdraw::withdraw(&env, &user, &project, value)
    }
    pub fn withdraw_yield(env: Env, user: Address, project: Symbol) -> i128 {
        withdraw::withdraw_yield(&env, &user, &project)
    }
    pub fn withdraw_fee(env: Env, project: Symbol, admin: Address) -> i128 {
        admin.require_auth();
        storage::withdraw_project_accrued_fee(&env, &project)
    }
    pub fn get_user_projects(env: Env, user: Address) -> Vec<Symbol> {
        storage::get_user_projects(&env, &user)
    }
    pub fn get_project_total(env: Env, project: Symbol) -> i128 {
        storage::get_project_total(&env, &project)
    }
    pub fn get_user_deposit(env: Env, user: Address, project: Symbol) -> i128 {
        storage::get_user_deposit(&env, &user, &project)
            .map(|info| info.amount)
            .unwrap_or(0)
    }
    pub fn get_reserved_yield(env: Env, user: Address, project: Symbol) -> i128 {
        storage::get_reserved_yield(&env, &user, &project)
    }
    pub fn get_user_split(env: Env, user: Address, project: Symbol) -> i128 {
        storage::get_user_deposit(&env, &user, &project)
            .map(|info| info.split)
            .unwrap_or(0)
    }
    pub fn get_total_vault(env: Env) -> i128 {
        storage::get_total_vault(&env)
    }
}

// Adicione este bloco no final do seu arquivo lib.rs

#[cfg(test)]
mod test {
    use super::*;
    use soroban_sdk::{Env, String, Symbol, testutils::Address as _, vec};

    #[test]
    // Função auxiliar para inicializar ambiente, usuário e cliente do contrato
    // REMOVIDO: definição duplicada de setup_test
    fn test_deposit_and_check_balances() {
        // 1. PREPARAÇÃO (Arrange)
        let env = Env::default();
        let user = Address::generate(&env);
        let contract_id = env.register(FeeVaultContract, ());
        let client = FeeVaultContractClient::new(&env, &contract_id);

        // 2. AÇÃO (Act)
        let project = Symbol::new(&env, "PROJ1");
        let amount_to_deposit = 1_000_000_000;
        let yield_split = 10;
        // Executa o depósito diretamente usando o cliente.
        // 1. Mock authentication for all accounts in the environment.
        env.mock_all_auths();

        // 2. Chame a função `deposit` normalmente.
        client.deposit(&user, &project, &amount_to_deposit, &yield_split);
        // 3. VERIFICAÇÃO (Assert)
        assert_eq!(client.get_user_deposit(&user, &project), amount_to_deposit);
        assert_eq!(client.get_project_total(&project), amount_to_deposit);
        assert_eq!(client.get_total_vault(), amount_to_deposit);
        assert_eq!(client.get_user_split(&user, &project), yield_split);
    }

    #[test]
    fn test_withdraw_successfully() {
        let (env, user, client) = setup_test();
        let project = Symbol::new(&env, "PROJ1");

        // Deposita 1000
        env.mock_all_auths();
        client.deposit(&user, &project, &1000, &10);
        assert_eq!(client.get_user_deposit(&user, &project), 1000);

        // Saca 400
        client.withdraw(&user, &project, &400);

        // Verifica se o novo saldo é 600
        assert_eq!(client.get_user_deposit(&user, &project), 600);
        assert_eq!(client.get_project_total(&project), 600);
        assert_eq!(client.get_total_vault(), 600);
    }

    #[test]
    #[should_panic(expected = "Saldo insuficiente")]
    fn test_withdraw_insufficient_funds_panics() {
        let (env, user, client) = setup_test();
        let project = Symbol::new(&env, "PROJ1");

        env.mock_all_auths();
        client.deposit(&user, &project, &1000, &10);

        // Tenta sacar 1001 (mais do que tem) - isso deve causar pânico
        client.withdraw(&user, &project, &1001);
    }

    // Função auxiliar para inicializar ambiente, usuário e cliente do contrato
    fn setup_test() -> (Env, Address, FeeVaultContractClient<'static>) {
        let env = Env::default();
        let user = Address::generate(&env);
        let contract_id = env.register(FeeVaultContract, ());
        let client = FeeVaultContractClient::new(&env, &contract_id);
        (env, user, client)
    }

    // Adicione este contrato Mock dentro do `mod test`
    #[contract]
    pub struct MockBlendPoolContract;

    #[contractimpl]
    impl MockBlendPoolContract {
        // Esta função simula a `deposit_yield` da Blend.
        // Ela apenas armazena os valores que recebeu para podermos verificá-los.
        pub fn deposit_yield(env: Env, user: Address, project: Symbol, amount: i128) {
            env.storage().instance().set(&("user",), &user);
            env.storage().instance().set(&("project",), &project);
            env.storage().instance().set(&("amount",), &amount);
        }
    }

    #[test]
    fn test_simulate_yield_calls_blend_pool() {
        let (env, user, client) = setup_test();
        let project = Symbol::new(&env, "PROJ1");

        // Registra o contrato Mock com o ID exato que o FeeVault espera
        let blend_pool_id =
            Address::from_string(&String::from_str(&env, super::r#yield::POOL_CONTRACT_ID));
        env.register_contract(&blend_pool_id, MockBlendPoolContract);

        // 1. Deposita 1000 com um split de 10% (90% para o usuário)
        env.mock_all_auths();
        client.deposit(&user, &project, &1000, &10);

        // 2. Simula um rendimento total de 200 para o cofre
        let total_yield = 200;
        client.simulate_yield(&total_yield, &user);

        // 3. VERIFICAÇÃO: Envolve a leitura do storage dentro de `as_contract`.
        env.as_contract(&blend_pool_id, || {
            let expected_user_blend_amount = 180; // 200 * (100 - 10) / 100

            assert_eq!(
                env.storage()
                    .instance()
                    .get::<_, Address>(&("user",))
                    .unwrap(),
                user
            );
            assert_eq!(
                env.storage()
                    .instance()
                    .get::<_, Symbol>(&("project",))
                    .unwrap(),
                project
            );
            assert_eq!(
                env.storage()
                    .instance()
                    .get::<_, i128>(&("amount",))
                    .unwrap(),
                expected_user_blend_amount
            );
        });
    }

    #[test]
    fn test_withdraw_yield_successfully() {
        // 1. PREPARAÇÃO
        let (env, user, client) = setup_test();
        let project = Symbol::new(&env, "PROJ1");

        // Registra o contrato Mock da Blend Pool
        let blend_pool_id =
            Address::from_string(&String::from_str(&env, super::r#yield::POOL_CONTRACT_ID));
        env.register_contract(&blend_pool_id, MockBlendPoolContract);

        // O usuário deposita 1000, com um split de 10% (10% para o projeto, 90% para a Blend)
        env.mock_all_auths();
        client.deposit(&user, &project, &1000, &10);

        // Um rendimento total de 200 é gerado.
        // O usuário é o único investidor, então ele tem direito a todo o rendimento.
        // 10% de 200 = 20 (será salvo como `reserved_yield`)
        // 90% de 200 = 180 (será enviado para a Blend)
        client.simulate_yield(&200, &user);

        // Verificação intermediária: checa se o rendimento reservado foi salvo
        assert_eq!(client.get_reserved_yield(&user, &project), 20);

        // 2. AÇÃO
        // O usuário saca o rendimento reservado
        let withdrawn_yield = client.withdraw_yield(&user, &project);

        // 3. VERIFICAÇÃO
        // O valor sacado deve ser 20
        assert_eq!(withdrawn_yield, 20);
        // O rendimento reservado no storage deve voltar a ser 0
        assert_eq!(client.get_reserved_yield(&user, &project), 0);
        // O depósito PRINCIPAL do usuário deve permanecer INTACTO
        assert_eq!(client.get_user_deposit(&user, &project), 1000);
    }

    #[test]
    #[should_panic]
    fn test_withdraw_unauthorized_user_panics() {
        // setup
        let (env, _, client) = setup_test();
        let user_a = Address::generate(&env);
        let user_b = Address::generate(&env);
        let project = Symbol::new(&env, "PROJ1");

        // User A deposita
        env.mock_auths(&[soroban_sdk::testutils::MockAuth {
            address: &user_a,
            invoke: &soroban_sdk::testutils::MockAuthInvoke {
                contract: &client.address,
                fn_name: "deposit",
                args: soroban_sdk::vec![
                    &env,
                    user_a.into_val(&env),
                    project.into_val(&env),
                    1000.into_val(&env),
                    10.into_val(&env),
                ],
                sub_invokes: &[],
            },
        }]);
        client.deposit(&user_a, &project, &1000, &10);

        // User B tenta sacar -> deve panicar
        env.mock_auths(&[soroban_sdk::testutils::MockAuth {
            address: &user_b,
            invoke: &soroban_sdk::testutils::MockAuthInvoke {
                contract: &client.address,
                fn_name: "withdraw",
                args: soroban_sdk::vec![
                    &env,
                    user_a.into_val(&env),
                    project.into_val(&env),
                    500.into_val(&env),
                ],
                sub_invokes: &[],
            },
        }]);
        client.withdraw(&user_a, &project, &500); // se não autorizado, panic ocorre
    }
}
