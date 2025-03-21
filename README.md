# ✈️ AeroNFT – Flight Ticket as NFT  

AeroNFT is a blockchain-based system that converts flight tickets into NFTs, enabling true ownership and seamless verification for airlines, customs, and passengers. This system ensures secure storage of public passenger details on-chain while keeping sensitive credentials off-chain, accessible only to authorized entities.  

## 🌍 System Concept  

AeroNFT transforms traditional flight tickets into NFTs, displaying them inside **MetaMask** as digital flight passes. The system enhances security, transparency, and flexibility in ticket management while enabling:  
- **On-chain Storage:** Public flight and passenger metadata are stored on-chain.  
- **Off-chain Security:** Sensitive credentials are stored off-chain, with only hash references recorded on-chain for verification.  
- **Customs & Airline Authorization:** Airlines and customs can verify passenger details through authorized database access.  
- **Proof of Travel:** Passengers own NFT tickets as travel evidence, usable for loyalty rewards and future integrations.  

---

## 🔑 Key Features  

### ✅ True Ownership of Flight Tickets  
Passengers receive NFTs as digital tickets, ensuring authenticity and security.  

### 🔗 Secure Passenger Data Management  
- Public details stored on-chain (viewable in MetaMask).  
- Credential hashes recorded on-chain, while sensitive data remains securely off-chain.  

### ✈️ Seamless Airline & Customs Verification  
- Airlines retrieve passenger hashes and verify details through a trusted off-chain database.  
- Data is only accessible to authorized parties based on user consent.  

### 🎖️ Travel Badge & Reward System  
- NFTs act as travel badges, recording passenger history.  
- Potential integration with loyalty programs for frequent travelers.  

---

## 🏗️ Tech Stack & Framework  

- **Frontend:** Next.js  
- **Smart Contracts:** Solidity  
- **Blockchain Development:** Scaffold_ETH 2  
- **Storage:** IPFS (InterPlanetary File System)  
- **Network:** Scroll Sepolia Testnet (for development & testing)  

---

## 🚀 Getting Started  

### 🛠 Prerequisites  

Before you begin, you need to install the following tools:  

- [Node (>= v20.18.3)](https://nodejs.org/en/download/)  
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))  
- [Git](https://git-scm.com/downloads)  

### 🔧 Installation & Setup  

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/aeronft.git
   cd aeronft
2. Install dependencies:
   ```bash
    yarn install
3. Start the development server:
   ```bash
   yarn start
4. Open the app in your browser:
   ```bash
   http://localhost:3000/

---

## 📜 License

This project is under the MIT License.




