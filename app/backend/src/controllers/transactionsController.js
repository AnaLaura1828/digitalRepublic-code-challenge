const getAllTransactions = require("../services/transactionsService");

const getAllController = async (_req, res) => {
    const accounts = await getAllTransactions.getAllTransactions();
    return res.status(200).json(accounts);
  };

const createTransaction = async (req, res) => {
      const {send, destiny, value } = req.body;

      const result = await getAllTransactions.createTransaction(send, destiny, value);
      return res.status(200).json(result)
  };


  module.exports = {
      getAllController,
      createTransaction,
  }