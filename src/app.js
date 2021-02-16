const Blockchain = require('./models/block_chain');
const Transaction = require('./models/transaction');

let lambiCoin = new Blockchain();
lambiCoin.createTransaction(new Transaction("add1", "add2", 100));
lambiCoin.createTransaction(new Transaction("add2", "add1", 510));
lambiCoin.createTransaction(new Transaction("add2", "add3", 510));
lambiCoin.createTransaction(new Transaction("add2", "add4", 510));

console.log("Starting the miner");

while (1) {
  lambiCoin.minePendingTransactions("lambi-address");

  console.log(
    "Balance of lambi is",
    lambiCoin.getBalanceOfAddress("lambi-address")
  );
}