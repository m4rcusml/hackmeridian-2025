#![no_std]

use soroban_sdk::{contract, contractimpl, Env, Address, Symbol, Vec};

mod storage;
mod deposit;
mod r#yield;
mod withdraw;

#[contract]
pub struct FeeVaultContract;

#[contractimpl]
impl FeeVaultContract {
    pub fn deposit(env: Env, user: Address, project: Symbol, amount: i128, yield_split: i128) {
        deposit::deposit(env, user, project, amount, yield_split);
    }
    // Simula yield para um projeto específico
    pub fn simulate_yield(env: Env, project: Symbol, percent: i128, users: Vec<Address>) {
        r#yield::simulate_yield(env, project, percent, users)
    }

    // Distribui yield entre depositantes
    pub fn distribute_yield(env: Env, project: Symbol, users: Vec<Address>) -> Vec<(Address, i128)> {
        r#yield::distribute_yield(env, project, users)
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
