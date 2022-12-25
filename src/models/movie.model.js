const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const movieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    theaterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Theater',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
movieSchema.plugin(toJSON);
movieSchema.plugin(paginate);

/**
 * @typedef Theater
 */
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
