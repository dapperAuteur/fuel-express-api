let express = require('express');
let router = express.Router();
let db = require('./../models');
let helpersUsers = require('./../helpers/helpers_users');

router.route('/')
  .get(helpersUsers.getUsers)

router.route('/:userId')
  .get(helpersUsers.getUser)
  .put(helpersUsers.updateUser)
  .delete(helpersUsers.deleteUser)

module.exports = router;
