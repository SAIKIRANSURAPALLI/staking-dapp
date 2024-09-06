# Create a Token Staking DApp & Earn Rewards on Any Blockchain

Create a Token Staking DApp & Earn Rewards with ICO using Next.js, WAGMI, Solidity and Deploy on Any Blockchain!

Ready to build your own Token Staking DApp and earn rewards with an ICO? In this comprehensive tutorial, we'll guide you step-by-step through creating a decentralized application using Next.js, WAGMI, and Solidity on any blockchain. Whether you're a beginner or an experienced developer,

By the end of this video, you'll have a fully functional DApp capable of staking tokens and earning rewards. Don't forget to like, subscribe, and hit the bell icon to stay updated with our latest tutorials!

## Project Overview


#### Install Vs Code Editor

```
  URL: https://code.visualstudio.com/download
  GET: VsCode Editor
```

#### NodeJs & NPM Version

```
  URL: https://nodejs.org/en/download
  NodeJs: v18.17.1 || LATEST VERSION
  NPM: 8.19.2 || LATEST VERSION
```

#### RPU URL PROVIDER

```
  NAME: ANKR.COM
  URL: https://www.ankr.com/rpc/
```

#### FORMSPREE

```
  # FORMSPREE
  URL: https://formspree.io/
```

#### Google Cloud Web3

Google Cloud Web3 will provide you with some free test faucets which you can transfer to your wallet address for deploying the contract

```
  Get: Free Test Faucets
  URL : https://cloud.google.com/application/web3/faucet/ethereum
```

#### RemixID

We are using RemixID for deploying the contract and generation of the ABI in the project, but you can use any other tools like Hardhat, etc.

```
  OPEN: RemixID
  URL: https://remix-project.org
```

#### PACKAGES

```
  {
  "name": "staking-dapp",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@formspree/react": "^2.5.1",
    "@headlessui/react": "^1.6.6",
    "@heroicons/react": "^1.0.6",
    "@next/font": "13.4.13",
    "@nextui-org/react": "^1.0.0-beta.9",
    "@rainbow-me/rainbowkit": "^0.4.6",
    "ethers": "^5.7.2",
    "next": "13.4.13",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^4.10.1",
    "wagmi": "^0.6.4"
  }
}

```

#### ENVIROMENT VARIABLES

```
# STAKING DAPP ADDRESS
NEXT_PUBLIC_STAKING_DAPP =
NEXT_PUBLIC_TOKEN_ICO =

# TOKEN ADDRESS
NEXT_PUBLIC_DEPOSIT_TOKEN =
NEXT_PUBLIC_REWARD_TOKEN =
NEXT_PUBLIC_TOKEN_LOGO = https://gateway.pinata.cloud/ipfs/QmXTwJ2GgxbWET7uxyKaidT2isPF83YhQP77acskvZbCGu

# ADMIN
NEXT_PUBLIC_ADMIN_ADDRESS =


# CURRANY
NEXT_PUBLIC_CURRENCY = ETH
NEXT_PUBLIC_CHAIN_ID = 17000
NEXT_PUBLIC_NETWORK_NAME = Holesky
NEXT_PUBLIC_NETWORK_DECIMALS = 18
NEXT_PUBLIC_NETWORK = holesky

# RPC URLS

NEXT_PUBLIC_HOLESKY_RPC_URL = https://rpc.ankr.com/eth_holesky
NEXT_PUBLIC_ADDRESS_EXPLORER = https://holesky.etherscan.io/address/
NEXT_PUBLIC_TOKEN_EXPLORER = https://holesky.etherscan.io/token/
NEXT_PUBLIC_EXPLORER = https://holesky.etherscan.io/

# FORMSPREE
NEXT_PUBLIC_FORMSPREE_API =

```
