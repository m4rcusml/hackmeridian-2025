#![no_std]

use soroban_sdk::{contract, contractimpl, Address, Env, Symbol, Vec};

mod deposit;
mod storage;
mod withdraw;
mod r#yield;

#[contract]
pub struct FeeVaultContract;

#[contractimpl]
impl FeeVaultContract {
    // Deposita valor em projeto com split
    pub fn deposit(env: Env, user: Address, project: Symbol, amount: i128, yield_split: i128) {
        deposit::deposit(env, user, project, amount, yield_split);
    }

    // Simula rendimento da vault universal
    pub fn simulate_yield(
        env: Env,
        total_yield: i128,
        all_projects: Vec<Symbol>,
        all_users: Vec<Address>,
    ) {
        r#yield::simulate_yield(env, total_yield, all_projects, all_users)
    }

    // Saque principal + rendimento reservado (automático)
    pub fn withdraw(env: Env, user: Address, project: Symbol, value: i128) -> i128 {
        withdraw::withdraw(env, user, project, value)
    }

    // Saque apenas do rendimento reservado (sem mexer no principal)
    pub fn withdraw_yield(env: Env, user: Address, project: Symbol) -> i128 {
        withdraw::withdraw_yield(env, user, project)
    }

    // (Opcional) Saque fee acumulada como admin
    pub fn withdraw_fee(env: Env, project: Symbol, _admin: Address) -> i128 {
        let amount = storage::withdraw_project_accrued_fee(env, project);
        amount
    }

    // Lista de projetos apoiados pelo user
    pub fn get_user_projects(env: Env, user: Address) -> Vec<Symbol> {
        storage::get_user_projects(env, user)
    }

    // Saldo do projet
    pub fn get_project_total(env: Env, project: Symbol) -> i128 {
        storage::get_project_total(env, project)
    }

    // Novo: Consulta saldo depositado (principal) user/projeto
    pub fn get_user_deposit(env: Env, user: Address, project: Symbol) -> i128 {
        storage::get_user_deposit(env, user, project)
            .map(|info| info.amount)
            .unwrap_or(0)
    }

    // Novo: Consulta rendimento reservado user/projeto
    pub fn get_reserved_yield(env: Env, user: Address, project: Symbol) -> i128 {
        storage::get_reserved_yield(env, user, project)
    }

    // Novo: Consulta split atual user/projeto
    pub fn get_user_split(env: Env, user: Address, project: Symbol) -> i128 {
        storage::get_user_deposit(env, user, project)
            .map(|info| info.split)
            .unwrap_or(0)
    }

    // Novo: Consulta total da vault universal
    pub fn get_total_vault(env: Env) -> i128 {
        storage::get_total_vault(env)
    }
}
