use crate::storage::{get_total_vault, set_total_vault, update_project_total, DepositInfo};
use soroban_sdk::{Address, Env, Map, Symbol};

pub fn withdraw(env: Env, user: Address, project: Symbol, amount: i128) -> i128 {
    let mut deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(&user)
        .unwrap_or(Map::new(&env));
    if let Some(mut info) = deposits.get(project.clone()) {
        assert!(amount > 0, "O valor do saque deve ser positivo.");
        assert!(info.amount >= amount, "Saldo insuficiente");

        let reserved_to_withdraw = if amount >= info.amount {
            info.reserved_yield
        } else {
            (info.reserved_yield * amount) / info.amount
        };

        info.amount -= amount;
        // Proteção extra contra underflow
        info.reserved_yield = info.reserved_yield.saturating_sub(reserved_to_withdraw);
        let to_withdraw = amount + reserved_to_withdraw;

        deposits.set(project.clone(), info);
        env.storage().persistent().set(&user, &deposits);

        update_project_total(env.clone(), project.clone(), -amount);
        let vault = get_total_vault(env.clone());
        set_total_vault(env, vault - amount);

        to_withdraw
    } else {
        panic!("Nada a sacar desse projeto");
    }
}

pub fn withdraw_yield(env: Env, user: Address, project: Symbol) -> i128 {
    let mut deposits: Map<Symbol, DepositInfo> = env
        .storage()
        .persistent()
        .get(&user)
        .unwrap_or(Map::new(&env));
    if let Some(mut info) = deposits.get(project.clone()) {
        let reserved = info.reserved_yield;
        if reserved == 0 {
            // Não panique: retorne zero, ou use assert se preferir
            return 0;
        }
        info.reserved_yield = 0;
        deposits.set(project.clone(), info);
        env.storage().persistent().set(&user, &deposits);
        reserved
    } else {
        0
        // ou panic!("Nenhum yield para sacar nesse projeto");
    }
}
