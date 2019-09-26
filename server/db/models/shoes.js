const Sequelize = require('sequelize');
const db = require('../../db');

const Shoes = db.define('shoes', {
  kind: {
    type: Sequelize.STRING
  }
});

module.exports = Shoes;
