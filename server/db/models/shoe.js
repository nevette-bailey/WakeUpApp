const Sequelize = require('sequelize');
const db = require('../../db');

const Shoe = db.define('shoes', {
  kind: {
    type: Sequelize.STRING
  }
});

module.exports = Shoe;
