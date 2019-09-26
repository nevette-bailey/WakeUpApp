const Sequelize = require('sequelize');
const db = require('../../db');

const Coat = db.define('coat', {
  name: Sequelize.STRING
});

module.exports = Coat;
