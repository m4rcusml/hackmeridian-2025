use soroban_sdk::{contracttype, Address, Env, Map, Symbol, Vec};

#[derive(Clone)]
#[contracttype]
pub struct DepositInfo {
    pub amount: i128,         
    pub split: i128,          
    pub reserved_yield: i128, 
}

// TOTAL DA VAULT
pub fn get_total_vault(env: &Env) -> i128 {
    env.storage().persistent().get(&"vault_total").unwrap_or(0)
}

pub fn set_total_vault(env: &Env, value: i128) {
    env.storage().persistent().set(&"vault_total", &value);
}

// MAPA DE DEPOSITOS (user → projeto → DepositInfo)
pub fn set_user_deposit(env: &Env, user: &Address, project: &Symbol, amount: i128, split: i128) {
    let mut deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(user)
        .unwrap_or(Map::new(env));
    
    let mut info = deposits.get(project.clone()).unwrap_or(DepositInfo {
        amount: 0,
        split,
        reserved_yield: 0,
    });
    
    info.amount += amount;
    info.split = split;
    deposits.set(project.clone(), info);
    env.storage().persistent().set(user, &deposits);

    // Atualiza total da vault
    let total = get_total_vault(env);
    set_total_vault(env, total + amount);
}

pub fn get_user_deposit(env: &Env, user: &Address, project: &Symbol) -> Option<DepositInfo> {
    let deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(user)
        .unwrap_or(Map::new(env));
    deposits.get(project.clone())
}

pub fn get_user_projects(env: &Env, user: &Address) -> Vec<Symbol> {
    let deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(user)
        .unwrap_or(Map::new(env));
    deposits.keys()
}

// TOTAL EM CADA PROJETO (para proporcionalidade)
pub fn get_project_total(env: &Env, project: &Symbol) -> i128 {
    env.storage()
        .persistent()
        .get(&("project_total", project.clone()))
        .unwrap_or(0)
}

pub fn get_reserved_yield(env: &Env, user: &Address, project: &Symbol) -> i128 {
    let deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(user)
        .unwrap_or(Map::new(env));
    deposits
        .get(project.clone())
        .map(|info| info.reserved_yield)
        .unwrap_or(0)
}

pub fn set_project_total(env: &Env, project: &Symbol, value: i128) {
    env.storage()
        .persistent()
        .set(&("project_total", project.clone()), &value);
}

// ATUALIZAR QUANDO ALGUÉM DEPOSITA/SACA
pub fn update_project_total(env: &Env, project: &Symbol, delta: i128) {
    let prev = get_project_total(env, project);
    set_project_total(env, project, prev + delta);
}

// UPDATE reservado do yield não doado
pub fn add_reserved_yield(env: &Env, user: &Address, project: &Symbol, value: i128) {
    let mut deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(user)
        .unwrap_or(Map::new(env));
    
    let mut info = deposits.get(project.clone()).unwrap_or(DepositInfo {
        amount: 0,
        split: 0,
        reserved_yield: 0,
    });
    
    info.reserved_yield += value;
    deposits.set(project.clone(), info);
    env.storage().persistent().set(user, &deposits);
}

pub fn withdraw_project_accrued_fee(env: &Env, project: &Symbol) -> i128 {
    let acc = env
        .storage()
        .persistent()
        .get(&("accrued_fee", project.clone()))
        .unwrap_or(0);
    env.storage()
        .persistent()
        .set(&("accrued_fee", project.clone()), &0_i128);
    acc
}