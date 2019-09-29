const Sequelize = require('sequelize');
const db = require('../database');

const Coat = db.define('coat', {
  name: Sequelize.STRING
});

module.exports = Coat;
