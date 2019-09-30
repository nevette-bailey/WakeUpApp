'use strict';

const Sequelize = require('sequelize');
const pkg = require('../../package.json');
const chalk = require('chalk');

console.log(chalk.yellow('Opening database connection'));

// const connectionString = {
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// };

const connectionString = process.env.DATABASE_URL;

// const db = new Sequelize(`${connectionString}`, {
//   logging: false,
//   protocol: null,
//   dialect: 'postgres'
// });

const db = new Sequelize(
  'd9g93tlmh82l4f',
  'ifydcsqocmcycq',
  '8945fee9f8310c70f576a4811b284fce8f4649a7f94defbdab813172c95f4728',
  {
    host: 'ec2-23-21-156-171.compute-1.amazonaws.com',
    port: 5432,
    logging: false,
    protocol: null,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    }
  }
);

module.exports = db;
