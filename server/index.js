'use strict';

const path = require('path');
const express = require('express');
const app = express();

//api routes
app.use('/api', require('./api'));

//any remaining requests with an extension (.js, .css, etc) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  } else {
    next();
  }
});

//error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
