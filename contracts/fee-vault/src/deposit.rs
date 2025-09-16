use soroban_sdk::{Env, Address, Symbol};
use crate::storage;

pub fn deposit(env: &Env, user: &Address, project: &Symbol, amount: i128, split: i128) {
    user.require_auth();
    
    assert!(amount > 0, "O depósito deve ser positivo.");
    assert!(split >= 0 && split <= 100, "Split deve estar entre 0 e 100.");
    
    storage::set_user_deposit(env, user, project, amount, split);
    storage::update_project_total(env, project, amount);
    
    // Opcional: Você pode emitir eventos aqui se quiser registrar logs no contrato
    // env.events().publish(...);
}