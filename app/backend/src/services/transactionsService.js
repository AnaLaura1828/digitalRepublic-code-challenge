const { Transaction } = require('../models');

const getAllTransactions = async () => {
  const result = await Transaction.findAll();
  return result
};

const createTransaction = async (send, destiny, value) => {    
  const result = await Transaction.create({
    send,
    destiny,
    value
  })    
  return result;
};

module.exports = {
  getAllTransactions,
  createTransaction,
};