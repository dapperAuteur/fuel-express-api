let mongoose = require('mongoose');

let fuelSchema = new mongoose.Schema({
  vendor: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  tripMileage: {
    type: Number,
    required: true,
    min: 0
  },
  gallons: {
    type: Number,
    required: true,
    min: 0
  },
  costPerGallon: {
    type: Number,
    required: true,
    min: 0
  },
  transactionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction',
    required: true
  }
}, {
  timestamps: true
});

let Fuel = mongoose.model('Fuel', fuelSchema);
module.exports = Fuel;
