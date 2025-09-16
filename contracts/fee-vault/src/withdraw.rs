use soroban_sdk::{Env, Address, Symbol};

use crate::storage;

/// Saque do valor depositado pelo usuário em um projeto
pub fn withdraw(env: Env, user: Address, project: Symbol, amount: i128) {
    assert!(amount > 0, "O valor do saque deve ser positivo.");

    let deposit_opt = storage::get_user_deposit(env.clone(), user.clone(), project.clone());
    assert!(deposit_opt.is_some(), "Depósito não encontrado para usuário e projeto.");

    let mut deposit = deposit_opt.unwrap();

    assert!(
        deposit.amount >= amount,
        "Saldo insuficiente para saque."
    );

    deposit.amount -= amount;

    storage::set_user_deposit(env, user, project, deposit.amount, deposit.split);
}

/// Saque do rendimento (yield) acumulado de um projeto para determinado usuário
pub fn withdraw_yield(env: Env, user: Address, project: Symbol) {
    let rendimento = storage::get_project_status(env.clone(), project.clone());
    assert!(rendimento > 0, "Rendimento acumulado insuficiente para saque.");

    // Opcional: Calcular a parte do usuário baseada no split (se quiser distribuir rendimento proporcionalmente)
    let deposit_opt = storage::get_user_deposit(env.clone(), user.clone(), project.clone());
    assert!(deposit_opt.is_some(), "Depósito não encontrado para usuário e projeto.");

    let deposit = deposit_opt.unwrap();

    let share = rendimento * deposit.split / 100;

    assert!(share > 0, "Nenhum rendimento disponível para saque para este usuário.");

    // Após saque, atualização do rendimento total, subtraindo a parte sacada do usuário
    let rendimento_atualizado = rendimento - share;
    storage::set_project_status(env.clone(), project.clone(), rendimento_atualizado);

    // Aqui pode emitir evento ou realizar ações necessárias para transferir ou contabilizar o saque do yield

    // Observação: neste MVP não gerenciamos token/movimentação real de fundos, só registramos lógica
}
