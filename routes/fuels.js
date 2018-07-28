let express = require('express');
let router = express.Router();
let db = require("../models");
let helpersFuels = require("../helpers/helpers_fuels");

router.route('/')
  .get(helpersFuels.getFuels)
  .post(helpersFuels.createFuel)

router.route('/:fuelId')
  .get(helpersFuels.getFuel)
  .put(helpersFuels.updateFuel)
  .delete(helpersFuels.deleteFuel)

module.exports = router;
