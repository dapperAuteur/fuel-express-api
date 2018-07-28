let express = require('express');
let router = express.Router();
let db = require('./../models');
let helpersTransactions = require('./../helpers/helpers_transactions');

router.route('/')
  .get(helpersTransactions.getTransactions)
  .post(helpersTransactions.createTransaction)

router.route('/:transactionId')
  .get(helpersTransactions.getTransaction)
  .put(helpersTransactions.updateTransaction)
  .delete(helpersTransactions.deleteTransaction)

module.exports = router;
