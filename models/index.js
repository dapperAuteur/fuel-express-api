let mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fourLetterWord-api', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

module.exports.Transaction = require('./transaction');
module.exports.User = require('./user');
