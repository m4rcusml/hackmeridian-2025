#![no_std]

use soroban_sdk::{contract, contractimpl, Env, Address, Symbol};

#[contract]
pub struct FeeVaultContract;

#[contractimpl]
impl FeeVaultContract {
    pub fn deposit(_env: Env, _user: Address, _project: Symbol, _amount: i128, _yield_split: i128) {
        // Lógica do depósito ainda a ser implementada
        // yield_split esperado em percentuais (ex: 80 para 80%)
    }
}
