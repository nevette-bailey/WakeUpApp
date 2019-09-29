const Sequelize = require('sequelize');
const db = require('../database');

const Top = db.define('tops', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Top;
