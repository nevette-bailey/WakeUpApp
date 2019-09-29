const Sequelize = require('sequelize');
const db = require('../database');

const Precipitation = db.define('precipitation', {
  type: {
    type: Sequelize.STRING
  }
});

module.exports = Precipitation;
