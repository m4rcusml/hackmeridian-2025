// yield.rs

use soroban_sdk::{Env, Symbol, Address, Vec};
use crate::storage;

/// Aplica um percentual de rendimento sobre um projeto e salva o novo rendimento acumulado
pub fn simulate_yield(env: Env, project: Symbol, percent: i128, users: Vec<Address>) {
    // Calcula o novo rendimento para o projeto inteiro baseado no depósito de cada user
    let mut total = 0i128;
    for user in users.iter() {
        if let Some(info) = storage::get_user_deposit(env.clone(), user.clone(), project.clone()) {
            let rendimento = info.amount * percent / 100;
            total += rendimento;
        }
    }
    let rendimento_atual = storage::get_project_status(env.clone(), project.clone());
    storage::set_project_status(env, project, rendimento_atual + total);
}

/// Distribui o rendimento de um projeto entre os depositantes (exemplo MVP: retorna novo estado).  
pub fn distribute_yield(env: Env, project: Symbol, users: Vec<Address>) -> Vec<(Address, i128)> {
    let rendimento = storage::get_project_status(env.clone(), project.clone());
    let mut distribuidos = Vec::new(&env);
    for user in users.iter() {
        if let Some(info) = storage::get_user_deposit(env.clone(), user.clone(), project.clone()) {
            // Valor proporcional ao split do usuário
            let share = rendimento * info.split / 100;
            distribuidos.push_back((user.clone(), share));
        }
    }
    // Zera o rendimento do projeto (ou não, conforme regra)
    storage::set_project_status(env, project, 0);
    distribuidos
}
