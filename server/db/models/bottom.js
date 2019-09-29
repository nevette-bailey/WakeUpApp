const Sequelize = require('sequelize');
const db = require('../database');

const Bottom = db.define('bottom', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Bottom;
