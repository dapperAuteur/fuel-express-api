let db = require('../models');

exports.getFuels = function (req, res) {
  db.Fuel.find()
    .then(function (fuels) {
      res.json(fuels);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.createFuel = function (req, res) {
  db.Fuel.create(req.body)
    .then(function (newFuel) {
      res.status(201).json(newFuel);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.getFuel = function (req, res) {
  db.Fuel.findById(req.params.fuelId)
    .then(function (foundFuel) {
      res.status(201).json(foundFuel);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.updateFuel = function (req, res) {
  db.Fuel.findOneAndUpdate({ _id: req.params.fuelId }, req.body, { new: true })
    .then(function (fuel) {
      res.status(201).json(fuel);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.deleteFuel = function (req, res) {
  db.Fuel.remove({ _id: req.params.fuelId })
    .then(function () {
      res.status(201).json({
        message: `Fuel ${req.params.fuelId} deleted`,
        fuelId: req.params.fuelId
      });
    })
    .catch(function (err) {
      res.send(err);
    });
}

module.exports = exports;
