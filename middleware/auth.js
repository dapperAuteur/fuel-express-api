require('dotenv').load()
let jwt = require('jsonwebtoken');

exports.loginRequired = function (req, res, next) {
  try {
    let token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded) {
        next();
      } else {
        res.status(401).json({ message: 'Please log in first.' });
      }
    })
  } catch (e) {
    res.status(401).json({ message: 'Please log in first.' });
  }
}

exports.ensureCorrectUser = function (req, res, next) {
  try {
    let token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded && decoded.currentUserId === req.params.id) {
        next();
      } else {
        res.status(401).json({ message: 'You do NOT have the proper credentials for this action.' });
      }
    });
  } catch (e) {
    res.status(401).json({ message: 'Unauthorized to perform this action.' });
  }
}

exports.ensureCorrectRole = function (req, res, next) {
  try {
    let token = req.headers.authorization.split(' ')[1];
    let role = req.headers.role.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded) {
        if (decoded && role === "0") {
          next();
        } else {
          res.status(401).json({
            message: 'Must be an admin to perform this action.',
            decoded: decoded,
            id: decoded.currentUserId
          });
        }
      } else {
        res.status(401).json({
          message: 'Please log in.',
          decoded: decoded,
          id: decoded.currentUserId
        })
      }
    })
  } catch (e) {
    res.status(401).json({ message: 'Please log in.' });
  }
}
