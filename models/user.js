var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: Number,
    required: true,
    default: 3,
    min: 0
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profileImageUrl: {
    type: String
  },
  translationScore: {
    type: String
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    reg: 'Comment'
  }],
  games: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  }],
  guesses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FourLetterWord'
  }],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  transactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction'
  }]
}, {
  timestamps: true
});

var User = mongoose.model('User', userSchema);
module.exports = User;
