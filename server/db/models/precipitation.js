const Sequelize = require('sequelize');
const db = require('../db');

const Precipitation = db.define('precipitation', {
  type: {
    type: Sequelize.STRING
  }
});

module.exports = Precipitation;
