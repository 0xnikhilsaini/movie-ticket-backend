const express = require('express');
const validate = require('../../middlewares/validate');
const movieValidation = require('../../validations/movie.validation');
const movieController = require('../../controllers/movie.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(movieValidation.createMovie), movieController.createMovie)
  .get(validate(movieValidation.getMovies), movieController.getMovies);



module.exports = router;
