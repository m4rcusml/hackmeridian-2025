use soroban_sdk::{Env, Address, Symbol};
use crate::storage;

pub fn withdraw(env: Env, user: Address, project: Symbol, amount: i128) -> i128 {
    let total = storage::withdraw_user_deposit(env, user, project, amount);
    // Aqui normalmente transferiria funds; para MVP retorna valor total a liberar
    total
}

pub fn withdraw_yield(env: Env, user: Address, project: Symbol) -> i128 {
    let mut deposits = env
        .storage()
        .persistent()
        .get::<Map<Symbol, crate::storage::DepositInfo>>(&user)
        .unwrap_or(Map::new(&env));
    if let Some(mut info) = deposits.get(project.clone()) {
        let reserved = info.reserved_yield;
        assert!(reserved > 0, "Sem yield reservado para sacar");
        info.reserved_yield = 0;
        deposits.set(project.clone(), info);
        env.storage().persistent().set(&user, &deposits);
        return reserved;
    } else {
        panic!("Nenhum yield para sacar nesse projeto");
    }
}
