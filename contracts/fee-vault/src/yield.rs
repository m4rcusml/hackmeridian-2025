use soroban_sdk::{Address, Env, Symbol, Vec, String, IntoVal};

// O ID da pool da Blend permanece como uma constante do módulo.
pub const POOL_CONTRACT_ID: &str = "CCCGACYPS2EYJIRMGPLPAAK2F5WH7H2HK3C7VHLTRTPHZVNOWCRKPO6P";

// Removemos `#[contract]` e `#[contractimpl]`.
// Esta é agora uma função pública simples, não um contrato.
// O nome foi ajustado para refletir a ação para um único usuário.
pub fn distribute_yield_for_user(
    env: &Env,
    total_yield: i128,
    all_projects: &Vec<Symbol>,
    user: &Address,
) {
    // A validação de `require_auth` deve ser feita na função principal do contrato.

    let pool_address = Address::from_string(&String::from_str(env, POOL_CONTRACT_ID));
    let vault_total = crate::storage::get_total_vault(env);
    
    if vault_total == 0 {
        return;
    }

    for project in all_projects.iter() {
        if let Some(info) = crate::storage::get_user_deposit(env, user, &project) {
            if info.amount > 0 {
                let project_total = crate::storage::get_project_total(env, &project);

                if project_total > 0 {
                    let proj_yield = total_yield * project_total / vault_total;
                    let user_yield = proj_yield * info.amount / project_total;
                    let user_blend_amount = user_yield * (100 - info.split) / 100;

                    // A parte do rendimento que NÃO vai para a Blend (a taxa do projeto)
                    let fee_amount = user_yield - user_blend_amount;

                    // CORREÇÃO: Salva a "taxa" como rendimento reservado do usuário.
                    if fee_amount > 0 {
                        crate::storage::add_reserved_yield(env, user, &project, fee_amount);
                    }


                    if user_blend_amount > 0 {
                        // `user` e `project` precisam ser clonados para a chamada,
                        // pois a conversão para `Val` consome o valor.
                        env.invoke_contract::<()>(
                            &pool_address,
                            &Symbol::new(env, "deposit_yield"),
                            soroban_sdk::vec![
                                env,
                                user.clone().into_val(env),
                                project.clone().into_val(env),
                                user_blend_amount.into_val(env)
                            ],
                        );
                    }
                }
            }
        }
    }
}