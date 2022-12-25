const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const theaterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
theaterSchema.plugin(toJSON);
theaterSchema.plugin(paginate);

/**
 * @typedef Theater
 */
const Theater = mongoose.model('Theater', theaterSchema);

module.exports = Theater;
