const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { ticketService } = require('../services');


const createTicket = catchAsync(async (req, res) => {
  const ticket = await ticketService.createTicket(req.body);
  res.status(httpStatus.CREATED).send(ticket);
});


const reshuldeTicket = catchAsync(async (req, res) => {
  const updateBody = {showId:req.showId};
  const ticket = await ticketService.updateTicketById(res.ticketId,updateBody);
  res.status(httpStatus.CREATED).send(ticket);
});


module.exports = {
  createTicket,
  reshuldeTicket,
};
