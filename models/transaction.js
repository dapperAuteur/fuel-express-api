let mongoose = require('mongoose');
let User = require('./user');

var transactionSchema = new mongoose.Schema({
  transactionEvent: {
    type: String,
    required: true
  },
  account: {
    type: String,
    required: true
  },
  dateTime: {
    type: String,
    required: false
  },
  details: {
    type: String,
    required: false
  },
  amount: {
    type: Number,
    default: 0,
    required: true
  },
  currency: {
    type: String,
    default: "USD: US Dollars",
    required: true
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  currentUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

let Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
