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
// console.log(process.env.DATABASE_URL, 'DATABASE_URL');

// // this doesn't work - try to figure out how to connect without static credentials
// const db = new Sequelize(process.env.DATABASE_URL, {
//   logging: false,
//   protocol: 'postgres',
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: true
//   }
// });

//this connects to local database!
// const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
//   logging: false // so we don't see all the SQL queries getting made
// });

// // this works - connects to Heroku database!
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
