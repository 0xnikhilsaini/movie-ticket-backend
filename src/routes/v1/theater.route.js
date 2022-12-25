const express = require('express');
const validate = require('../../middlewares/validate');
const theaterValidation = require('../../validations/theater.validation');
const theaterController = require('../../controllers/theater.controller');

const router = express.Router();


router
  .route('/')
  .post(validate(theaterValidation.createThreater), theaterController.createThreater)
  .get(validate(theaterController.getTheaters), theaterController.getTheaters);


  module.exports = router;
