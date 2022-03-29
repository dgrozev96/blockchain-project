const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "35181d3d680539ae560f545e9cc240fd98ac4cf02858a5143ea4e610907dd7b0"
);
const myWalletAddress = myKey.getPublic("hex");

let savjeeCoin = new Blockchain();
const tx1 = new Transaction(myWalletAddress, "public key goes here", 30);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

console.log("\n Starting the miner...");
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log(
  "\nBalance of xavier is",
  savjeeCoin.getBalanceOfAddress(myWalletAddress)
);

savjeeCoin.chain[1].transactions[0].amount = 1;

console.log("Is chain valid", savjeeCoin.isChainValid());
