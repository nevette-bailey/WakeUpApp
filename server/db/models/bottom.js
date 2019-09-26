const Sequelize = require('sequelize');
const db = require('../../db');

const Bottom = db.define('bottom', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Bottom;
