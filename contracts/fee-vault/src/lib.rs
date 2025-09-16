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
    pub fn deposit(env: Env, user: Address, project: Symbol, amount: i128, yield_split: i128) {
        deposit::deposit(env, user, project, amount, yield_split);
    }

    // Novo: Passe total_yield, all_projects, all_users
    pub fn simulate_yield(
        env: Env,
        total_yield: i128,
        all_projects: Vec<Symbol>,
        all_users: Vec<Address>,
    ) {
        r#yield::simulate_yield(env, total_yield, all_projects, all_users)
    }

    pub fn withdraw(env: Env, user: Address, project: Symbol, value: i128) -> i128 {
        withdraw::withdraw(env, user, project, value)
    }

    pub fn withdraw_yield(env: Env, user: Address, project: Symbol) -> i128 {
        withdraw::withdraw_yield(env, user, project)
    }

    pub fn withdraw_fee(env: Env, project: Symbol, _admin: Address) -> i128 {
        // Opcional: Só admin pode sacar (valide se admin == caller)
        // let caller = env.invoker();
        // assert!(caller == admin, "Somente admin pode sacar fees!");

        let amount = crate::storage::withdraw_project_accrued_fee(env, project);
        // Aqui normalmente você transferiria asset para o admin, mas para PoC só libera o valor
        amount
    }

    pub fn get_user_projects(env: Env, user: Address) -> Vec<Symbol> {
        storage::get_user_projects(env, user)
    }

    pub fn get_project_total(env: Env, project: Symbol) -> i128 {
        storage::get_project_total(env, project)
    }
}
