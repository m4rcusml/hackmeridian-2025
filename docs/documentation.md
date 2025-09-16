# 1. Introduction

## 1.1. Project Context

**4Bridge** is a decentralized social donation platform that aims to revolutionize the digital philanthropy ecosystem through the **Stellar** blockchain. The project addresses the growing demand for donation mechanisms that are transparent, sustainable, and that mitigate financial risk for supporters.

## 1.2. Problem

The global philanthropic model is facing a systemic crisis of trust, marked by a lack of transparency in resource management. International research shows that trust is the most determining factor in the decision to donate, but it's also the biggest barrier: a study by the **Charities Aid Foundation (2023)** indicates that over **50% of non-donors** cite doubts about how resources are used as a reason for hesitation. Similarly, research from the **BBB Wise Giving Alliance (2025)** reveals that almost **70% of potential donors** express concern about the misuse of their data and donations when supporting unknown institutions.

This distrust amplifies the model's biggest obstacle: **the loss of capital**. Traditional donation is a one-way, irreversible transaction—a financial sacrifice that triggers the cognitive bias of loss aversion (**KAHNEMAN, 2012**). For the donor, this creates a dilemma between financial security and social impact, which limits both the volume and frequency of contributions.

The result is an unsustainable model, often described as a “leaky bucket” (**SARGEANT, 2009**), where fundraising doesn't keep pace with donor attrition. Data from the **Fundraising Effectiveness Project (2023)** indicate that global new donor retention rates rarely exceed **25%** per year, confirming the sporadic and unpredictable nature of donations. This spiral of distrust, financial sacrifice, and low retention undermines the strategic planning of organizations and leaves an enormous potential of philanthropic capital untapped.

## 1.3. Objectives

- Provide an intuitive platform where users can support social causes without giving up their principal capital.
- Ensure the automated and auditable distribution of generated yields to projects, based on programmable rules.
- Offer social projects an innovative channel for fundraising, with a more predictable cash flow and strengthened trust with their supporters.
- Validate the technical and product viability of the **"yield donation"** model within the **Stellar/Soroban** ecosystem.

## 1.4. Justification

The project emerged from the need to align the potential of blockchain technology with social impact, eliminating the risk of capital loss and making philanthropy viable, which allows more people to contribute to social impact projects. Furthermore, the use of **Stellar** technology guarantees the traceability of donated yields, rebuilding trust and creating a stronger, more engaged support ecosystem.

---

# 2. Application Overview

## 2.1. Value Proposition

To better understand the project and its value proposition, the following value proposition canvas was developed:

<p align="center">Figure 1 - Low-fidelity prototype sketches.</p>
<div align="center">
  <img src="../docs/assets/wire1.jpg" style="transform: rotate(180deg);">
</div>
<p align="center">Source: (Material produced by the authors, 2025).</p>

<p align="center">Figure 2 - Low-fidelity prototype sketches.</p>
<div align="center">
  <img src="../docs/assets/wire2.jpg">
</div>
<p align="center">Source: (Material produced by the authors, 2025).</p>

<p align="center">Figure 3 - Low-fidelity prototype sketches.</p>
<div align="center">
  <img src="../docs/assets/wire3.jpg">
</div>
<p align="center">Source: (Material produced by the authors, 2025).</p>

For the digitalization of the screens in Figma, the following wireframes were created:

<p align="center">Figure 4 - Application wireframe.</p>
<div align="center">
  <img src="../docs/assets/LandingPage.png">
</div>
<p align="center">Source: (Material produced by the authors, 2025).</p>

<p align="center">Figure 5 - Application wireframe.</p>
<div align="center">
  <img src="../docs/assets/Projects.png">
</div>
<p align="center">Source: (Material produced by the authors, 2025).</p>

<p align="center">Figure 6 - Application wireframe.</p>
<div align="center">
  <img src="../docs/assets/profile.png">
</div>
<p align="center">Source: (Material produced by the authors, 2025).</p>

To better view each wireframe, please access the Figma link: [https://www.figma.com/design/61pQLLpxmorW98mTKshkIJ/hackMeridian?node-id=0-1&t=AM1NvXknhQ0CXrG8-1](https://www.figma.com/design/61pQLLpxmorW98mTKshkIJ/hackMeridian?node-id=0-1&t=AM1NvXknhQ0CXrG8-1).

### 2.1.1. Products & Services

- A web platform integrated with a **smart contract** for capital deposits with total liquidity.
- A profile dashboard to visualize generated yields and funded projects.
- A yield split mechanism that allows the user to configure the percentage of interest to be donated versus the portion they retain.
- Issuance of symbolic **NFTs** as digital impact certificates, gamifying the donation experience.

### 2.1.2. Gain Creators

- **Psychological and Financial Security:** Supporters contribute without fear of losing their principal assets.
- **Transparency:** Immediate auditability of transactions within the **Stellar** blockchain.
- **Continuous Engagement:** The model generates a recurring and continuous flow of donations for projects.
- **Flexibility and Control:** The user defines their level of support by configuring the split.

### 2.1.3. Pain Relievers

- Elimination of the risk of mismanagement or diversion of funds through the use of **on-chain** technology.
- Drastic reduction of bureaucracy and the operational costs of traditional intermediaries.
- Minimization of distrust by providing a public and immutable record of the entire financial flow.

### 2.1.4. Target Audience

1. **Modern Individual Donors (crypto-native and impact-driven):**
    - Young adults who already use crypto, stablecoins, or fintechs.
    - People interested in social impact who don't want to lose liquidity.
    - **Profile:** Retail investors, blockchain early adopters, **Web3** community.

2. **Philanthropists and Impact Investors (High-net-worth individuals and ESG):**
    - Individuals or funds that already support social causes but are looking for more transparent and efficient models.
    - They may see this platform as a way to “maximize impact without compromising assets.”
    - **Profile:** Family offices, **ESG** investors, recurring donors.

3. **Social Organizations (NGOs, foundations, and impact projects):**
    - Entities that face the unpredictability of donations and need a more stable cash flow.
    - They benefit directly from the sustainable **yield** model and transparency via blockchain.
    - **Profile:** Small and medium-sized **NGOs**, educational, environmental, or health foundations.

## 2.2. Solution Details

### 2.2.1. Key Features

- Secure connection to the platform via a **Freighter** wallet.
- Deposit capital into the donation **vault** with yield split configuration.
- View deposited capital, accumulated yields, and total amount donated.
- Automated distribution of yields to social projects via **smart contract**.
- Withdraw principal capital at any time, with no fees or penalties.
- View the impact certificate (**NFT**) received for each donation cycle.
- A complete and auditable history of all transactions on the blockchain.

### 2.2.2. Competitive Differentiators

- **Total Liquidity:** The only donation model that allows supporters to retain **100%** of their capital.
- **Guaranteed Transparency:** All operations are public and immutable on **Stellar**.
- **Sustentability:** Generates a continuous flow of resources for causes, rather than one-time donations.
- **Community Governance:** The future roadmap includes a plan for supporters themselves to decide which projects will be listed.

---

# 3. Project Application

## 3.1. User Flow

### Main Screens and Flows

- Welcome and Wallet Connection Screen: The first point of contact, simple and direct.
- Main Dashboard: An overview of the user’s capital, total impact generated, and a list of supported projects.
- Project Exploration Page: A detailed listing of available causes to support.
- Deposit Modal: An intuitive flow for defining the amount and yield split.
- Withdrawal Screen: An interface to request the withdrawal of principal capital.
- Certificate Gallery (**NFTs**): An area to view **NFTs** received as proof of impact.
- Transaction History Screen: A detailed log of all operations, with links to the Stellar block explorer.

The design process included low-fidelity prototypes for quick validation of flows and usability, culminating in the low-fidelity prototype that guided development. For a better view of the flow, you can observe the image below, which refers to the prototype sketch of the screens and their subsequent digitalization into wireframes in Figma.

<p align="center">Figure 7 - 4Bridges Value Proposition Canvas.</p>
<div align="center">
  <img src="../docs/assets/canvas.png">
</div>
<p align="center">Source: (Material produced by the authors, 2025).</p>

---

# 4. Final Application Version

## 4.1. Implemented Features

- Connection to a **Stellar** network wallet (**Freighter**).
- Deposit of capital into the **Soroban smart contract** via a web interface.
- **Withdrawal** of deposited principal capital.
- **On-chain** logic for recording deposits and withdrawals.
- Visualization of the user's deposited balance.

## 4.2. Main Screens and Flows Developed

- **Wallet Connection:** A functional authentication flow for the platform.
- **Projects Page (Mock):** An interface for viewing an example project.
- **Deposit:** A modal and logic for interacting with the contract's `deposit` function.
- **Withdrawal:** A button and logic for interacting with the contract's `withdraw` function.
- **Simple Dashboard:** Displays the user's current balance in the vault.

## 4.3. Technologies Used

- **Soroban SDK:** For the development and **deployment** of the smart contract on the **Testnet**.
- **React:** For building the interactive **frontend**.
- **TypeScript/JavaScript:** For business logic and client-side integration with the blockchain.
- **Stellar Wallets:** For integration with the **Freighter** wallet to sign transactions.

## 4.4. What AI tools and LLMs used


To gain **insights**, raise questions, improve ideas, and get help with some errors, the following technological tools were used:

- **Stella AI**
- **ChatGPT**
- **Gemini PRO**
- **V0**
- **Perplexity**
- **Claude**
---

# 5. Market Study and Marketing Plan

## 5.1. Executive Summary

**Impact Vault** is positioned as a pioneering solution in the **"Philanthropy-Fi"** sector, offering a protected capital donation model that attracts a new profile of donors and ensures sustainability for social projects. The focus on the **Stellar** platform allows for a global reach with minimal operational costs.

## 5.2. Market Analysis

The donation market is at a tipping point. On one hand, the traditional (**Web2**) model faces a crisis of trust due to a lack of transparency and high fees. On the other, crypto philanthropy (**Web3**) is still looking for a sustainable model.

Our platform is positioned precisely at this intersection, offering a **"Yield Donation" (Lossless Donation)** model, where social impact is generated continuously without the donor losing their capital. The choice of the **Stellar** network gives us a crucial competitive advantage in speed and cost, democratizing access to this new model.

To position **4Bridge** clearly in the philanthropic landscape, it is essential to analyze existing solutions and identify the gaps our project fills. The following **benchmarking** compares our innovative model with the main market approaches, which are:

- **The Giving Block:** A leading platform for cryptocurrency donations to **NGOs**, with a focus on ease and integration.
- **Giveth:** A **Web3** donation platform with governance and rewards via **token**.
- **Engiven:** A solution focused on crypto and combined stock donations for religious organizations and **NGOs**.
- **Coinbase Commerce:** A robust infrastructure for accepting cryptocurrencies on websites, with a large user base.

| Feature / Benefit | Impact Vault | The Giving Block | Giveth | Engiven | Coinbase Commerce |
| --- | --- | --- | --- | --- | --- |
| Total liquidity of principal capital | ✅ | ❌ | ❌ | ❌ | ❌ |
| Impact via yield | ✅ | ❌ | ✅ | ❌ | ❌ |
| **On-chain** transparency | ✅ | ✅ | ✅ | ❌ | ❌ |
| Programmable yield split | ✅ | ❌ | ❌ | ❌ | ❌ |
| Multi-currency support | ✅ | ✅ | ✅ | ✅ | ✅ |
| Real **DeFi** integration | ✅ | ❌ | ✅ | ❌ | ❌ |

## 5.3. Marketing Plan

The marketing strategy for **Impact Vault** was carefully crafted to amplify its visibility, directly engaging the target audience and strengthening its position in the digital donation and **Web3** ecosystem. With a focus on digital actions, communication will use social media, strategic partnerships with social organizations, public institutions, and specialized channels, always prioritizing clear, accessible language and a welcoming visual design.

### 5.3.1. Product

**4Bridge** is a decentralized donation platform that combines security, transparency, and flexibility, using the **Stellar** blockchain and **Soroban smart contracts**. It stands out by allowing the user to maintain full liquidity of the principal capital, with yields directed to chosen social projects, **NFT** impact certificates, a real-time **dashboard**, and participatory governance. The product offers an innovative, scalable, and reliable experience to engage digital donors, social organizations, and social investors.

### 5.3.2. Price

The pricing model will be based on transparent and competitive fees, applied to the yields generated in the **vault**, ensuring financial sustainability for platform maintenance and evolution. There will be differentiated levels—free versions with basic functionalities for common users and **premium** plans for **NGOs** and companies, including extra features, advanced dashboards, and detailed reports. Specific incentive and exemption policies may be applied to increase initial accessibility.

### 5.3.3. Place

The distribution and access to **4Bridge** will be digital, with an initial focus on communities and social projects connected to the **Stellar** blockchain, covering Brazil and other emerging markets. The platform will have a strong online presence, including an institutional **website**, integration with popular **wallets**, **Web3 marketplaces**, and strategic partnerships with philanthropic institutions, accelerators, and **ESG** organizations to expand its reach. The **onboarding** process will be facilitated by tutorials, **webinars**, and digital **networking**.

### 5.3.4. Promotion

The promotional strategy includes:

- Digital campaigns focused on social impact audiences, crypto enthusiasts, and institutional investors.
- Educational content about programmable donations and the benefits of the liquidity model, via blogs, **podcasts**, and **live streams**.
- Participation in **blockchain** events and **hackathons** for technical visibility and **networking**.
- Partnerships with **NGOs** and social influencers for demonstrations and validation.
- **Referral** and **gamification** programs to reward referrals and continuous engagement.
- Public relations focused on media specializing in philanthropy and technology.

---

# 6. Execution Plan

## Post-MVP Financial Roadmap

- **Revenue model:** Charging **x%** on the **pool's** yields.
- The users' principal capital remains untouched, ensuring social impact and total liquidity.
- **Gamification** via **NFTs** for engagement and recognition of social impact.

## 6.1. MVP Validation

**Objective:** To show that the **MVP** works in practice and generates interest.

| Item | Description | Estimated Cost (USD) | Potential Revenue (USD) | Estimated Profit (USD) |
| --- | --- | --- | --- | --- |
| Test with real users | Incentives for social projects and donors | 1,000 – 2,000 | - | - |
| Collection of usage metrics | Analysis and monitoring tools | 500 – 1,000 | - | - |
| Qualitative feedback | Interviews and initial support | 500 – 1,000 | - | - |
| **Subtotal Phase 1** | - | **2,000 – 4,000** | - | - |

**Deliverables:** Validation report + initial impact metrics.

## 6.2. Product Refinement and Improvement

**Objective:** To improve **UX/UI**, **MVP** performance, and engagement through **gamification**.

| Item | Description | Estimated Cost (USD) | Potential Revenue (USD) | Estimated Profit (USD) |
| --- | --- | --- | --- | --- |
| **UX/UI** improvement | **Design** adjustments, **dashboards**, and panels | 1,500 – 3,000 | - | - |
| **Smart contract** and **backend** optimization | Ensuring security, efficiency, and scalability | 2,000 – 4,000 | - | - |
| **Gamification** via **NFTs** | Creating impact **NFTs** that symbolize contributions, reinforcing engagement | 1,000 – 2,000 | May generate revenue via **minting** or **marketplace** | Variable |
| **Subtotal Phase 2** | - | **4,500 – 9,000** | - | - |

**Deliverables:** An improved **MVP**, ready for more users and engagement through **gamification**.

## 6.3. Marketing and Monetization via Pool

**Objective:** To attract users, increase the **pool** volume, and generate revenue and engagement.

| Item | Description | Estimated Cost (USD) | Potential Revenue (USD) | Estimated Profit (USD) |
| --- | --- | --- | --- | --- |
| Targeted campaigns | Digital **marketing** and advertising | 2,000 – 4,000 | 3% – 5% of the **pool's** yields | Depends on the **pool's** volume |
| Strategic partnerships | **NGOs**, foundations, and **DeFi** communities | 500 – 1,500 | Increases user volume and yields | Depends on the **pool's** volume |
| Educational content | Videos, guides, and online materials | 500 – 1,000 | Encourages engagement and new contributions | Depends on the **pool's** volume |
| Incentives via **NFTs** | Digital promotions and rewards that encourage recurring contributions | 500 – 1,000 | Additional revenue via **minting** or **marketplace** | Variable |
| **Subtotal Phase 3** | - | **3,500 – 7,500** | 5,000 – 25,000 (year 1) | 5,000 – 25,000 |

**Deliverables:** User growth, **pool** volume, generated revenue, and engagement via **NFTs**.

---

# Total Financial Summary

| Cost Type | Estimated Value (USD) |
| --- | --- |
| Phase 1 – Validation | 2,000 – 4,000 |
| Phase 2 – Refinement + **NFTs** | 4,500 – 9,000 |
| Phase 3 – **Marketing** and Monetization | 3,500 – 7,500 |
| **Total Estimated** | **10,000 – 20,500** |

| Potential Revenue (x% on pool yields) | Estimated Profit |
| --- | --- |
| 5,000 – 25,000 (year 1) | 5,000 – 25,000 |

**Key points:**

- Revenue depends on the volume of **pool** yields and the adoption of **NFTs**.
- Net profit is close to revenue, considering operational costs are already covered in the previous phases.
- **Gamification** via **NFTs** increases engagement, loyalty, and the potential for extra revenue.

---

# 7. Why Use the Stellar Blockchain

The choice of the **Stellar blockchain** is strategic for the platform's success and differentiation. **Stellar** offers a unique combination of speed, security, low cost, and scalability—essential characteristics for operating a decentralized donation solution that aims to serve individual users as well as social organizations and institutional investors on a global scale.

## 7.1. Speed and Reduced Cost

- Fast transactions via **Stellar Consensus Protocol (SCP)** with minimal fees (~0.00001 XLM per transaction).

Fast transactions and very low fees make even small contributions economically viable, democratizing access to the system and enabling frequent micropayments. This is crucial for the **vault's** sustainability and for encouraging recurring supporter engagement.

## 7.2. Soroban Smart Contracts

- **Smart contracts** in **Rust/WASM** using the **Soroban SDK**.

The robustness and security of **Soroban smart contracts** allow for the implementation of complex logic for principal capital liquidity, programmable yield division, and the issuance of **NFT** certificates—a future idea for the project. In addition, they facilitate real-time auditability of operations, increasing the transparency and trust of all **stakeholders**.

## 7.3. Scalability and Global Inclusion

- Distributed infrastructure, compatible with multiple assets and currencies via **Stellar Assets** and **Liquidity Pools**.

**Stellar's** infrastructure is designed to support a high volume of transactions with great efficiency, ensuring that **Impact Vault** can grow without technical bottlenecks. The ability to support multiple currencies allows the platform to serve a diverse global audience, promoting financial inclusion in emerging markets and consolidating social impact in different regions.

## 7.4. Security and Transparency

- Immutable **ledger** + **Horizon API** + **indexers (StellarExpert, Dune)** for **on-chain** monitoring.

**Stellar** offers a secure, resilient, and proven environment where all operations are immutable and traceable, reinforcing **Impact Vault's** commitment to radical transparency. This feature is vital for combating historical distrust in donations, ensuring clear accountability and governance.

## 7.5. Ecosystem and Partnerships

- **Anchors** and **SEPs (SEP-10, SEP-24, SEP-12, SEP-31)** + integration with **wallets (Freighter, Albedo)** + **oracles (Band, DIA)**.

As a network with a growing ecosystem dedicated to social and decentralized finance solutions, **Stellar** provides synergies, integrations, and partnership opportunities that accelerate the project's continuous innovation, ensuring an evolution aligned with market technologies and demands.

In summary, the **Stellar blockchain** is not just a technological infrastructure, but an essential pillar that supports its value proposition, viability, and impact, establishing itself as a decisive competitive differentiator in the landscape of digital donations and innovative social financing.

---

# 8. Conclusions

**4Bridge** is a decentralized platform based on the **Stellar blockchain** that reinvents the traditional social donation model. By allowing users to maintain full liquidity over their contributed capital, the platform directs only the generated yields to chosen social projects, ensuring a continuous, secure, and transparent impact. This solution combines technological innovation and social sustainability, creating a scalable and reliable environment that attracts diverse profiles of supporters.