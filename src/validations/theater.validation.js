const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createThreater = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    address: Joi.string().required(),
  }),
};


const getTheaters = {
  query: Joi.object().keys({
    address: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};


module.exports = {
  createThreater,
  getTheaters,
};
