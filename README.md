# stETH-Contract

### Install Ganache On Click BlockChain

download from https://trufflesuite.com/ganache/, and create test network.

modify truffle-config.js

```
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
```

### Install nodejs requirements

```
npm install -g truffle 
npm install
```

### Compile Contrace

```
truffle compile
```

### Deploy Contract

```
truffle migrate --reset --network development
```

## Test

```
truffle test

Contract: UpgradeableToken
Total supply: 1000000000000000000000000
Owner balance: 1000000000000000000000000
User A balance: 100
User B balance: 100
```
