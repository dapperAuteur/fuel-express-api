let db = require('./../models');
let jwt = require('jsonwebtoken');

exports.signin = function (req, res) {
  db.User.findOne({ email: req.body.email }).then(function (user) {
    user.comparePassword(req.body.password, function (err, isMatch) {
      if (isMatch) {
        let token = jwt.sign({ userId: user.id },
        process.env.SECRET_KEY);
        res.status(201).json({
          userId: user.id,
          username: user.username,
          userRole: user.role,
          profileImageUrl: user.profileImageUrl,
          token
        });
      } else {
        res.status(400).json({ message: 'Invalid Email/Password' });
      }
    });
  })
  .catch(function (err) {
    res.status(400).json({ message: 'Invalid Email/Password' });
  });
};

exports.signup = function (req, res, next) {
  db.User.create(req.body).then(function (user) {
    let token = jwt.sign({ userId: user.id },
    process.env.SECRET_KEY);
    res.status(201).json({
      userId: user.id,
      username: user.username,
      userRole: user.role,
      profileImageUrl: user.profileImageUrl,
      token
    });
  })
  .catch(function (err) {
    res.status(400).json(err);
  });
};

module.exports = exports;
