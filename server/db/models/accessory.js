const Sequelize = require('sequelize');
const db = require('../../db');

const Accessory = db.define('accessory', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Accessory;
