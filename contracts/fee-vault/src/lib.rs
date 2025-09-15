#![no_std]

use soroban_sdk::{contractimpl, Env, Address, Symbol};

mod storage;
mod deposit;
mod yield_logic;
mod withdraw;

pub struct FeeVaultContract;

#[contractimpl]
impl FeeVaultContract {
    pub fn deposit(env: Env, user: Address, project: Symbol, amount: i128, yield_split: i128) {
        deposit::deposit(env, user, project, amount, yield_split);
    }
    pub fn simulate_yield(env: Env, yield_percent: i128) {
        yield_logic::simulate_yield(env, yield_percent);
    }
    pub fn distribute_yield(env: Env) {
        yield_logic::distribute_yield(env);
    }
    pub fn withdraw(env: Env, user: Address, project: Symbol, value: i128) {
        withdraw::withdraw(env, user, project, value);
    }
    pub fn withdraw_yield(env: Env, user: Address, project: Symbol) {
        withdraw::withdraw_yield(env, user, project);
    }
    pub fn get_user_projects(env: Env, user: Address) -> Vec<Symbol> {
        storage::get_user_projects(env, user)
    }
    pub fn get_project_status(env: Env, project: Symbol) -> i128 {
        storage::get_project_status(env, project)
    }
}
