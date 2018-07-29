let express = require('express');
let router = express.Router();
let db = require('./../models');
let jwt = require('jsonwebtoken');
let helpersAuth = require('./../helpers/helpers_auth');

router.post('/signin', helpersAuth.signin);
router.post('/signup', helpersAuth.signup);

module.exports = router;
