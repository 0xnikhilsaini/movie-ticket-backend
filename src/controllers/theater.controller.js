const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { theaterService } = require('../services');


const createThreater = catchAsync(async (req, res) => {
  const theater = await theaterService.createThreater(req.body);
  res.status(httpStatus.CREATED).send(theater);
});


const getTheaters = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['address']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await theaterService.queryTheaters(filter, options);
  res.send(result);
});


module.exports = {
  createThreater,
  getTheaters,
};
