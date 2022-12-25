const express = require('express');
const validate = require('../../middlewares/validate');
const showValidation = require('../../validations/show.validation');
const showController = require('../../controllers/show.controller');

const router = express.Router();

router
  .route('/')
  .post( validate(showValidation.createShow), showController.createShow);



module.exports = router;
