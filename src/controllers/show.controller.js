const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { showService } = require('../services');

const createShow = catchAsync(async (req, res) => {
  const show = await showService.createShow(req.body);
  res.status(httpStatus.CREATED).send(show);
});

module.exports = {
  createShow,
};
