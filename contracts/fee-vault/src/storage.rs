use soroban_sdk::{contracttype, Address, Env, Map, Symbol, Vec};

#[derive(Clone)]
#[contracttype]
pub struct DepositInfo {
    pub amount: i128,
    pub split: i128,
}

// Salva ou atualiza o depósito do usuário para um projeto
pub fn set_user_deposit(env: Env, user: Address, project: Symbol, amount: i128, split: i128) {
    let mut deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(&user)
        .unwrap_or(Map::new(&env));
    deposits.set(project.clone(), DepositInfo { amount, split });
    env.storage().persistent().set(&user, &deposits);
}

// Recupera todos projetos que um usuário apoiou
pub fn get_user_projects(env: Env, user: Address) -> Vec<Symbol> {
    let deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(&user)
        .unwrap_or(Map::new(&env));
    deposits.keys()
}

// Recupera informações do depósito do usuário em um projeto específico
pub fn get_user_deposit(env: Env, user: Address, project: Symbol) -> Option<DepositInfo> {
    let deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(&user)
        .unwrap_or(Map::new(&env));
    deposits.get(project)
}

// Atualiza/consulta rendimento acumulado de um projeto
pub fn set_project_status(env: Env, project: Symbol, rendimento: i128) {
    env.storage().persistent().set(&(&project,), &rendimento);
}

pub fn get_project_status(env: Env, project: Symbol) -> i128 {
    env.storage().persistent().get(&(&project,)).unwrap_or(0)
}

#[cfg(test)]
mod test {
    use super::*;
    use soroban_sdk::{symbol_short, Map, Symbol, Env};

    #[test]
    fn test_deposito() {
        let env = Env::default();
        let mut deposits: Map<Symbol, DepositInfo> = Map::new(&env);

        let project = symbol_short!("projeto");
        deposits.set(project.clone(), DepositInfo { amount: 100, split: 90 });

        assert_eq!(deposits.get(project.clone()).unwrap().amount, 100);

        // altere split, valor etc
        deposits.set(project.clone(), DepositInfo { amount: 300, split: 40 });
        assert_eq!(deposits.get(project).unwrap().split, 40);
    }
}
