'use strict';

const Sequelize = require('sequelize');
const pkg = require('../../package.json');
const chalk = require('chalk');

console.log(chalk.yellow('Opening database connection'));

const DB_URL = heroku

connectionString = {
  connectionString: process.env.DATABASE_URL,
  ssl: true
  };
const db = new Sequelize(connectionString, {
  logging: false
});

module.exports = db;
