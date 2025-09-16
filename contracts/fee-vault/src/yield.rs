use soroban_sdk::{Env, Symbol, Address, Vec};
use crate::storage;

// users: lista de todos usuários atuais da pool, projects: lista de todos projetos atuais
pub fn simulate_yield(env: Env, total_yield: i128, all_projects: Vec<Symbol>, all_users: Vec<Address>) {
    // Distribui proporcionalmente entre os projetos
    let vault_total = storage::get_total_vault(env.clone());
    assert!(vault_total > 0, "Vault vazio"); // Evita divisão por zero!
    for project in all_projects.iter() {
        let project_total = storage::get_project_total(env.clone(), project.clone());
        if project_total > 0 {
            // Quanto de yield vai para esse projeto
            let proj_yield = total_yield * project_total / vault_total;
            // Agora, distribua o yield aos usuários do projeto
            for user in all_users.iter() {
                if let Some(info) = storage::get_user_deposit(env.clone(), user.clone(), project.clone()) {
                    if info.amount > 0 {
                        let user_yield = proj_yield * info.amount / project_total;
                        // Doa split% ao projeto (disponibilize como quiser, ex: project_rendimentos[project] etc)
                        // O restante é reservado ao user
                        let reserved_part = user_yield * (100 - info.split) / 100;
                        crate::storage::add_reserved_yield(env.clone(), user.clone(), project.clone(), reserved_part);
                        // O split (doado) você pode somar em uma variável para relatórios, mas para MVP basta separar
                    }
                }
            }
        }
    }
}
