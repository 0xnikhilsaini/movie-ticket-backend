const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createTicket = {
  body: Joi.object().keys({
    seats: Joi.string().required(),
    ticketPrice: Joi.string().required(),
    total: Joi.string().required(),
    theaterId: Joi.string().custom(objectId),
    movieId: Joi.string().custom(objectId),
    showId: Joi.string().custom(objectId),
    userId: Joi.string().custom(objectId),
    phone: Joi.string().required(),
  }),
};

const reshudleTicket = {
  body: Joi.object().keys({
    ticketId: Joi.string().custom(objectId),
    showId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createTicket,
  reshudleTicket
};
