use soroban_sdk::{contracttype, Address, Env, Map, Symbol, Vec};

#[derive(Clone)]
#[contracttype]
pub struct DepositInfo {
    pub amount: i128,           // quanto o user depositou neste projeto ainda na vault
    pub split: i128,            // porcento do yield doado ao projeto
    pub reserved_yield: i128,   // rendimento reservado não doado para o user sacar
}

// TOTAL DA VAULT
pub fn get_total_vault(env: Env) -> i128 {
    env.storage().persistent().get(&"vault_total").unwrap_or(0)
}
pub fn set_total_vault(env: Env, value: i128) {
    env.storage().persistent().set(&"vault_total", &value);
}

// MAPA DE DEPOSITOS (user → projeto → DepositInfo)
pub fn set_user_deposit(env: Env, user: Address, project: Symbol, amount: i128, split: i128) {
    let mut deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(&user)
        .unwrap_or(Map::new(&env));
    let mut info = deposits.get(project.clone()).unwrap_or(DepositInfo { amount: 0, split, reserved_yield: 0 });
    // Ao novo depósito, some amount ao existente, não zere reserved_yield
    info.amount += amount;
    info.split = split;
    deposits.set(project.clone(), info);
    env.storage().persistent().set(&user, &deposits);

    // Atualiza total da vault
    let total = get_total_vault(env.clone());
    set_total_vault(env, total + amount);
}

pub fn get_user_deposit(env: Env, user: Address, project: Symbol) -> Option<DepositInfo> {
    let deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(&user)
        .unwrap_or(Map::new(&env));
    deposits.get(project)
}

pub fn get_user_projects(env: Env, user: Address) -> Vec<Symbol> {
    let deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(&user)
        .unwrap_or(Map::new(&env));
    deposits.keys()
}

// TOTAL EM CADA PROJETO (para proporcionalidade)
pub fn get_project_total(env: Env, project: Symbol) -> i128 {
    env.storage().persistent().get(&("project_total", project)).unwrap_or(0)
}
pub fn set_project_total(env: Env, project: Symbol, value: i128) {
    env.storage().persistent().set(&("project_total", project), &value);
}

// ATUALIZAR QUANDO ALGUÉM DEPOSITA/SACA
pub fn update_project_total(env: Env, project: Symbol, delta: i128) {
    let prev = get_project_total(env.clone(), project.clone());
    set_project_total(env, project, prev + delta);
}

// UPDATE reservado do yield não doado
pub fn add_reserved_yield(env: Env, user: Address, project: Symbol, value: i128) {
    let mut deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(&user)
        .unwrap_or(Map::new(&env));
    let mut info = deposits.get(project.clone()).unwrap_or(DepositInfo { amount: 0, split: 0, reserved_yield: 0 });
    info.reserved_yield += value;
    deposits.set(project, info);
    env.storage().persistent().set(&user, &deposits);
}

// Atualize withdraw para também descontar do project_total e vault!
pub fn withdraw_user_deposit(env: Env, user: Address, project: Symbol, amount: i128) -> i128 {
    let mut deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(&user)
        .unwrap_or(Map::new(&env));
    if let Some(mut info) = deposits.get(project.clone()) {
        assert!(info.amount >= amount, "Saldo insuficiente");
        info.amount -= amount;
        let to_withdraw = amount + info.reserved_yield;
        // Zera também o reserved_yield, pois tudo é sacado de uma vez
        info.reserved_yield = 0;
        deposits.set(project.clone(), info);
        env.storage().persistent().set(&user, &deposits);

        // Atualiza project_total e vault_total
        update_project_total(env.clone(), project.clone(), -amount);
        let vault = get_total_vault(env.clone());
        set_total_vault(env, vault - amount);

        return to_withdraw; // valor a liberar para o usuário
    } else {
        panic!("Nada a sacar desse projeto");
    }
}

pub fn withdraw_project_accrued_fee(env: Env, project: Symbol) -> i128 {
    let acc = env.storage().persistent().get(&("accrued_fee", project.clone())).unwrap_or(0);
    env.storage().persistent().set(&("accrued_fee", project), &0_i128);
    acc
}
