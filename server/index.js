'use strict';

const path = require('path');
const express = require('express');
const app = express();
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table');
    const results = { results: result ? result.rows : null };
    res.render('pages/db', results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send('Error ' + err);
  }
});
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

app.listen(process.env.PORT || 3000, function() {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});
module.exports = app;
