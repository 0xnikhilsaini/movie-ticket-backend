const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createShow = {
  body: Joi.object().keys({
    showDate: Joi.date().required(),
    seates: Joi.number().required(),
    theaterId: Joi.string().custom(objectId),
    movieId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createShow,
};
