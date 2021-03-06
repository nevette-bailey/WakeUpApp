const Sequelize = require('sequelize');
const db = require('../database');

const Weather = db.define('weather', {
  temperature: {
    type: Sequelize.RANGE(Sequelize.INTEGER),
    validate: {
      min: 10,
      max: 120
    }
  }
});

module.exports = Weather;
