const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const showSchema = mongoose.Schema(
  {
    showDate: {
      type: Date,
      required: true,
    },
    theaterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Theater',
      required: true,
    },
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
      required: true,
    },
    seates: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
showSchema.plugin(toJSON);
showSchema.plugin(paginate);

/**
 * @typedef Show
 */
const Show = mongoose.model('Show', showSchema);

module.exports = Show;
