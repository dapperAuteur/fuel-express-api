let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
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

userSchema.pre('save', function (next) {
  let user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, 10).then(function (hashedPassword) {
    user.password = hashedPassword;
    next();
  }, function (err) {
    return next(err);
  });
});

userSchema.methods.comparePassword = function (comparePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return next(err);
    next(null, isMatch);
  });
};

let User = mongoose.model('User', userSchema);
module.exports = User;
