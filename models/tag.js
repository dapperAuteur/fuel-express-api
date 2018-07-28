let mongoose = require('mongoose');

let tagSchema = new mongoose.Schema({
  tagName: {
    type: String,
    required: true,
    unique: true
  },
  text: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
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
