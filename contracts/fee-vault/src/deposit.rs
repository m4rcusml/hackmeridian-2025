use soroban_sdk::{Env, Address, Symbol};
use crate::storage;

pub fn deposit(env: Env, user: Address, project: Symbol, amount: i128, split: i128) {
    // Validações simples de sanidade
    assert!(amount > 0, "O depósito deve ser positivo.");
    assert!(split >= 0 && split <= 100, "Split deve estar entre 0 e 100.");

    // Chama storage para atualizar/inserir o depósito
    storage::set_user_deposit(env, user, project, amount, split);

    // Opcional: Você pode emitir eventos aqui se quiser registrar logs no contrato
    // env.events().publish(...);
}

#[cfg(test)]
mod test {
  use super::*;
  use soroban_sdk::{symbol_short, Symbol, Env, Address};
  use crate::storage::DepositInfo;

  // Mock storage using soroban_sdk::Map instead of std
  struct MockStorage {
    deposits: soroban_sdk::Map<(Address, Symbol), DepositInfo>,
  }

  impl MockStorage {
    fn new() -> Self {
      Self {
        deposits: soroban_sdk::Map::new(&Env::default()),
      }
    }
    fn set_user_deposit(&mut self, user: Address, project: Symbol, amount: i128, split: i128) {
      self.deposits.set((user, project), DepositInfo { amount, split });
    }
    fn get_user_deposit(&self, user: &Address, project: &Symbol) -> Option<DepositInfo> {
      self.deposits.get((user.clone(), project.clone()))
    }
  }

  #[test]
  fn test_deposito_memoria() {
    let env = Env::default();
    let user = <soroban_sdk::Address as soroban_sdk::testutils::Address>::generate(&env);
    let project = symbol_short!("projeto");
    let mut storage = MockStorage::new();

    // Simula depósito
    storage.set_user_deposit(user.clone(), project.clone(), 100, 90);
    match storage.get_user_deposit(&user, &project) {
        Some(deposit) => assert_eq!(deposit.amount, 100),
        None => panic!("Depósito não encontrado para o usuário e projeto"),
    }

    // Alterando split e valor
    storage.set_user_deposit(user.clone(), project.clone(), 300, 40);
    match storage.get_user_deposit(&user, &project) {
        Some(deposit) => assert_eq!(deposit.split, 40),
        None => panic!("Depósito não encontrado para o usuário e projeto"),
    }

    // Testando outro projeto
    let project2 = symbol_short!("outro");
    storage.set_user_deposit(user.clone(), project2.clone(), 500, 70);
    match storage.get_user_deposit(&user, &project2) {
        Some(deposit) => assert_eq!(deposit.amount, 500),
        None => panic!("Depósito não encontrado para o usuário e projeto2"),
    }
    match storage.get_user_deposit(&user, &project2) {
        Some(deposit) => assert_eq!(deposit.split, 70),
        None => panic!("Depósito não encontrado para o usuário e projeto2"),
    }
  }

  #[test]
  #[should_panic(expected = "O depósito deve ser positivo.")]
  fn test_deposit_amount_negativo_memoria() {
    let env = Env::default();
    let user = <soroban_sdk::Address as soroban_sdk::testutils::Address>::generate(&env);
    let project = symbol_short!("negativo");
    deposit(env, user, project, -10, 50);
  }

  #[test]
  #[should_panic(expected = "Split deve estar entre 0 e 100.")]
  fn test_deposit_split_invalido_maior_memoria() {
    let env = Env::default();
    let user = <soroban_sdk::Address as soroban_sdk::testutils::Address>::generate(&env);
    let project = symbol_short!("splitmaio");
    deposit(env, user, project, 100, 101);
  }

  #[test]
  #[should_panic(expected = "Split deve estar entre 0 e 100.")]
  fn test_deposit_split_invalido_menor_memoria() {
    let env = Env::default();
    let user = <soroban_sdk::Address as soroban_sdk::testutils::Address>::generate(&env);
    let project = symbol_short!("splitmeno");
    deposit(env, user, project, 100, -1);
  }
}
