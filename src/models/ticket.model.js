const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const ticketSchema = mongoose.Schema(
  {
    seats: {
      type: Number,
      required: true,
    },
    ticketPrice: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
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
    showId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Show',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
ticketSchema.plugin(toJSON);
ticketSchema.plugin(paginate);

/**
 * @typedef Theater
 */
const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
