use soroban_sdk::{Env, Address, Symbol};
use crate::storage;

pub fn deposit(env: Env, user: Address, project: Symbol, amount: i128, split: i128) {
    // Validações simples de sanidade
    assert!(amount > 0, "O depósito deve ser positivo.");
    assert!(split >= 0 && split <= 100, "Split deve estar entre 0 e 100.");

    // Chama storage para atualizar/inserir o depósito
    storage::set_user_deposit(env, user, project, amount, split);

    // Opcional: Você pode emitir eventos aqui se quiser registrar logs no contrato
    // env.events().publish(...);
}

#[cfg(test)]
mod test {
    use super::*;
    use soroban_sdk::{symbol_short, testutils::Address as TestAddress, Env};

    #[test]
    fn test_deposit_sucesso() {
        let env = Env::default();
        let user = <soroban_sdk::Address as TestAddress>::generate(&env);
        let project = symbol_short!("proj");

        // Isso deve rodar sem panic!
        crate::deposit::deposit(env.clone(), user.clone(), project.clone(), 1500, 85);

        let info = crate::storage::get_user_deposit(env, user, project).unwrap();
        assert_eq!(info.amount, 1500);
        assert_eq!(info.split, 85);
    }
}
