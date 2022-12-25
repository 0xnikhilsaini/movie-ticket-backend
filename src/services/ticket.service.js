const httpStatus = require('http-status');
const { Theater,Show,Ticket } = require('../models');
const ApiError = require('../utils/ApiError');


/**
 * Create a Threater
 * @param {Object} showBody
 * @returns {Promise<Show>}
 */
const createTicket = async (ticketBody) => {
  return Ticket.create(ticketBody);
};

const getTicketById = async (id) => {
  return Ticket.findById(id);
};


const updateTicketById = async (ticketId, updateBody) => {
  const ticket = await getTicketById(userId);
  if (!ticket) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ticket not found');
  }

  Object.assign(ticket, updateBody);
  await ticket.save();
  return ticket;
};

module.exports = {
  createTicket,
  updateTicketById
};
