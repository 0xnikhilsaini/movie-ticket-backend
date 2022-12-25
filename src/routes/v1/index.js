const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const theaterRoute = require('./theater.route');
const movieRoute = require('./movie.route');
const showRoute = require('./show.route');
const ticketRoute = require('./ticket.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/theaters',
    route: theaterRoute,
  },
  {
    path: '/movies',
    route: movieRoute,
  },
  {
    path: '/shows',
    route: showRoute,
  },
  {
    path: '/tickets',
    route: ticketRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
