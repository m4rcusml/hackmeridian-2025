# Nome do Projeto

## **1. Introdução**

### 1.1. Contexto do Projeto

O (nome do projeto) é uma plataforma descentralizada de doação social, que visa revolucionar o ecossistema de filantropia digital por meio da blockchain Stellar. O projeto aborda a crescente demanda por mecanismos de doação que sejam transparentes, sustentáveis e que mitiguem o risco financeiro para os apoiadores.

### 1.2. Problema

O modelo filantrópico global atravessa uma crise de confiança sistêmica, marcada pela falta de transparência na gestão de recursos. Pesquisas internacionais mostram que a confiança é o fator mais determinante na decisão de doar, mas também a maior barreira: um estudo da Charities Aid Foundation (2023) aponta que mais de 50% dos não doadores citam dúvidas sobre a aplicação dos recursos como motivo de hesitação. De forma semelhante, pesquisas da BBB Wise Giving Alliance (2025) revelam que quase 70% dos potenciais doadores expressam preocupação com o uso indevido de seus dados e doações quando apoiam instituições desconhecidas.

Essa desconfiança amplifica o maior obstáculo do modelo: a perda de capital. A doação tradicional é uma transação de via única e irreversível, um sacrifício financeiro que ativa o viés cognitivo da aversão à perda (KAHNEMAN, 2012). Para o doador, isso significa um dilema entre segurança patrimonial e impacto social, o que limita tanto o volume quanto a frequência das contribuições.

O resultado é um modelo insustentável, frequentemente descrito como um “balde furado” (SARGEANT, 2009), no qual a captação não acompanha a evasão. Dados do Fundraising Effectiveness Project (2023) indicam que as taxas globais de retenção de novos doadores raramente ultrapassam 25% ao ano, confirmando o caráter esporádico e pouco previsível das doações. Essa espiral de desconfiança, sacrifício financeiro e baixa retenção mina o planejamento estratégico das organizações e mantém um enorme potencial de capital filantrópico inexplorado.


### 1.3. Objetivos

- Proporcionar uma plataforma intuitiva onde usuários possam apoiar causas sociais sem abrir mão do seu capital principal.
    
- Garantir a distribuição automatizada e auditável dos rendimentos gerados para os projetos, conforme regras programáveis.
    
- Oferecer aos projetos sociais um canal inovador para captação de recursos, com fluxo de caixa mais previsível e fortalecimento da confiança com seus apoiadores.
    
- Validar a viabilidade técnica e de produto do modelo "yield donation" no ecossistema Stellar/Soroban.    
    

### 1.4. Justificativa

O projeto surgiu da necessidade de alinhar o potencial da tecnologia blockchain com o impacto social, eliminando o risco da perda de capital e viabilizando a filantropia, permitindo que mais pessoas contribuam com projetos de impacto social. Além disso, o uso da tecnologia Stellar garante a rastreabilidade dos rendimento doados, reconstruindo a confiança e criando um ecossistema de apoio mais forte e engajado.

---

## **2. Visão geral da aplicação**

### 2.1. Proposta de Valor

#### 2.1.1. Produtos & Serviços

- Plataforma web integrada a um smart contract para depósitos de capital com liquidez total; 
- Painel de visualização do perfil com os rendimentos gerados e os projetos financiados; 
- Mecanismo de split de rendimento que permite que o usuário configure o percentual dos juros a ser doado versus o retido para si;
- Emissão de NFTs simbólicos como certificados digitais de impacto, gamificando a experiência de doação.

#### 2.1.2. Gain Creators 

- **Segurança Psicológica e Financeira:** Apoiadores contribuem sem medo de perder seu patrimônio principal.
- **Transparência:** Auditabilidade imediata de transações dentro da blockchain Stellar.
- **Engajamento Contínuo:** O modelo gera um fluxo de doações recorrente e contínuo para os projetos.
- **Flexibilidade e Controle:** O usuário define o nível de apoio através da configuração do split.

#### 2.1.3. Pain Relievers 

- Eliminação do risco de má gestão ou desvio de fundos através do uso da tecnologia on-chain;
- Redução drástica da burocracia e dos custos operacionais de intermediários tradicionais;
- Minimização da desconfiança ao fornecer um registro público e imutável de todo o fluxo financeiro.

#### 2.1.4. Perfil do Cliente

- Apoiadores de causas sociais e filantropos que buscam métodos de doação mais seguros e transparentes;
- Projetos sociais, ONGs e startups de impacto em busca de modelos de financiamento inovadores e confiáveis;
- Comunidades e usuários do ecossistema cripto interessados em aplicar seus ativos para gerar impacto social.

### 2.2. Detalhamento da Solução

#### 2.2.1. Funcionalidades Principais

- Conexão segura com a plataforma via carteira Freighter.
    
- Depósito de capital no vault de doação com configuração do split de rendimento.
    
- Visualização do capital depositado, rendimentos acumulados e total doado.
    
- Distribuição automatizada dos rendimentos para os projetos sociais via smart contract.
    
- Resgate do capital principal a qualquer momento, sem taxas ou penalidades.
    
- Visualização do certificado de impacto (NFT) recebido por cada ciclo de doação.
    
- Histórico completo e auditável de todas as transações na blockchain.

#### 2.2.2. Diferenciais Competitivos

- **Liquidez Total:** O único modelo de doação que permite ao apoiador reter 100% de seu capital.
    
- **Transparência Garantida:** Todas as operações são públicas e imutáveis na Stellar.
    
- **Sustentabilidade:** Gera um fluxo contínuo de recursos para as causas, em vez de doações pontuais.
    
- **Governança Comunitária:** Roadmap futuro prevê que os próprios apoiadores decidam quais projetos serão listados.

---

## **3. Projeto da aplicação web**

### 3.1. Arquitetura da Aplicação


### 3.2. Protótipo de Alta Fidelidade

**Telas Principais e Fluxos**

- **Tela de Boas-Vindas e Conexão de Carteira:** Primeiro ponto de contato, simples e direto.
    
- **Dashboard Principal:** Visão geral do capital do usuário, impacto total gerado e lista de projetos apoiados.
    
- **Página de Exploração de Projetos:** Listagem detalhada das causas disponíveis para apoio.
    
- **Modal de Depósito:** Fluxo intuitivo para definir o valor e o split de rendimento.
    
- **Tela de Resgate (Withdraw):** Interface para solicitar o resgate do capital principal.
    
- **Galeria de Certificados (NFTs):** Área para visualizar os NFTs recebidos como prova de impacto.
    
- **Tela de Histórico de Transações:** Log detalhado de todas as operações, com links para o explorador de blocos da Stellar.
    

_O processo de design incluiu protótipos de baixa fidelidade para validação rápida de fluxos e usabilidade, culminando no protótipo de alta fidelidade que guiou o desenvolvimento._

---

## **4. Versão final da aplicação (MVP do Hackathon)**

### 4.1. Funcionalidades Implementadas

- Conexão com carteira da rede Stellar (Freighter).
    
- Depósito de capital no smart contract Soroban via interface web.
    
- Resgate (withdraw) do capital principal depositado.
    
- Lógica on-chain para o registro de depósitos e saques.
    
- Visualização do saldo depositado pelo usuário.

### 4.2. Telas e Fluxos Principais Desenvolvidos

- **Conexão de Carteira:** Fluxo funcional de autenticação na plataforma.
    
- **Página de Projetos (Mock):** Interface para visualização de um projeto de exemplo.
    
- **Depósito:** Modal e lógica para interagir com a função `deposit` do contrato.
    
- **Resgate:** Botão e lógica para interagir com a função `withdraw` do contrato.
    
- **Dashboard Simples:** Exibição do saldo atual do usuário no vault.    

### 4.3. Tecnologias Utilizadas

- **Soroban SDK:** Desenvolvimento e deploy do smart contract na Testnet.
- **React :** Construção do frontend interativo.
- **TypeScript/JavaScript:** Lógica de negócio e integração com a blockchain no lado do cliente.
- **Stellar Wallets:** Integração com a carteira Freighter para assinatura de transações.
---

## **5. Estudo de mercado e plano de marketing**

### 5.1. Resumo Executivo

O Impact Vault se posiciona como uma solução pioneira no setor de "Philanthropy-Fi", oferecendo um modelo de doação de capital protegido que atrai um novo perfil de doadores e garante sustentabilidade para projetos sociais. O foco na plataforma Stellar permite alcance global com custos operacionais mínimos.

### 5.2. Análise de Mercado

O mercado de doações está em um ponto de inflexão. De um lado, o modelo tradicional (Web2) enfrenta uma crise de confiança devido à falta de transparência e taxas elevadas. Do outro, a filantropia cripto (Web3) ainda busca um modelo sustentável que não exija que o doador abra mão de seu patrimônio.

Nossa plataforma se posiciona exatamente nesta intersecção, oferecendo um modelo de "Doação de Rendimento" (Lossless Donation), onde o impacto social é gerado de forma contínua sem que o doador perca seu capital. A escolha da rede Stellar nos confere uma vantagem competitiva crucial em velocidade e custo, democratizando o acesso a este novo modelo.

### 5.3. Plano de Marketing 

- Apresentar o projeto em comunidades da Stellar e de impacto social para atrair `early adopters`.
    
- Estabelecer parcerias com 2-3 ONGs para um projeto piloto na Testnet.
    
- Criar conteúdo educativo (artigos, vídeos) explicando o conceito de "yield donation".
    

---

## **6. Conclusões**
O (nome do projeto) é uma plataforma descentralizada baseada na blockchain Stellar que reinventa o modelo tradicional de doações sociais. Permitindo que o usuário mantenha total liquidez sobre o capital aportado, a plataforma direciona apenas os rendimentos gerados aos projetos sociais escolhidos, assegurando um impacto contínuo, seguro e transparente.  Essa solução alia inovação tecnológica e sustentabilidade social, criando um ambiente escalável e confiável que atrai diversos perfis de apoiadores.
