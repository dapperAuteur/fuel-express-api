let mongoose = require('mongoose');

let tagSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  transactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction'
  }],
  fuels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fuel'
  }]
}, {
  timestamps: true
});

let Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;
