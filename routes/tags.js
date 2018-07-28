let express = require('express');
let router = express.Router();
let db = require("../models");
let helpersTags = require("../helpers/helpers_tags");

router.route('/')
  .get(helpersTags.getTags)
  .post(helpersTags.createTag)

router.route('/:tagId')
  .get(helpersTags.getTag)
  .put(helpersTags.updateTag)
  .delete(helpersTags.deleteTag)

module.exports = router;
