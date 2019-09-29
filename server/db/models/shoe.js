const Sequelize = require('sequelize');
const db = require('../database');

const Shoe = db.define('shoes', {
  kind: {
    type: Sequelize.STRING
  }
});

module.exports = Shoe;
