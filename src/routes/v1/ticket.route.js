const express = require('express');
const validate = require('../../middlewares/validate');
const ticketValidation = require('../../validations/ticket.validation');
const ticketController = require('../../controllers/ticket.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(ticketValidation.createTicket), ticketController.createTicket)

  router
  .route('/reschedule-booking')
  .patch(validate(ticketValidation.reshudleTicket), ticketController.reshuldeTicket)


module.exports = router;
