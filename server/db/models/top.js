const Sequelize = require('sequelize');
const db = require('../../db');

const Top = db.define('tops', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Top;
