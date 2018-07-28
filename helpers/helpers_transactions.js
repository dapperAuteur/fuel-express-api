let db = require('../models');

exports.getTransactions = function (req, res) {
  db.Transaction.find()
    .then(function (transactions) {
      res.status(201).json(transactions);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.createTransaction = function (req, res) {
  db.Transaction.create(req.body)
    .then(function (newTransaction) {
      res.status(201).json(newTransaction);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.getTransaction = function (req, res) {
  db.Transaction.findById(req.params.transactionId)
    .then(function (foundTransaction) {
      res.status(201).json(foundTransaction);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.updateTransaction = function (req, res) {
  db.Transaction.findOneAndUpdate({ _id: req.params.transactionId }, req.body, { new: true })
    .then(function (transaction) {
      res.status(201).json(transaction);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.deleteTransaction = function (req, res) {
  db.Transaction.remove({ _id: req.params.transactionId })
    .then(function () {
      res.status(201).json({
        message: `Transaction ${req.params.transactionId} deleted`,
        transactionId: req.params.transactionId
      });
    })
    .catch(function (err) {
      res.send(err);
    });
}

module.exports = exports;
