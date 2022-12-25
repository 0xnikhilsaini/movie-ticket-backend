const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createMovie = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    theaterId: Joi.string().custom(objectId),
  }),
};

const getMovies = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

module.exports = {
  createMovie,
  getMovies,
};
