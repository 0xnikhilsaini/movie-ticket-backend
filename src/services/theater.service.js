const { Theater } = require('../models');

/**
 * Create a Threater
 * @param {Object} theaterBody
 * @returns {Promise<Theater>}
 */
const createThreater = async (theaterBody) => {
  return Theater.create(theaterBody);
};

/**
 * Query for theaters
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryTheaters = async (filter, options) => {
  const theaters = await Theater.paginate(filter, options);
  return theaters;
};


module.exports = {
  createThreater,
  queryTheaters,
};
