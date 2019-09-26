const Weather = require('./weather');
const User = require('./user');
const Top = require('./top');
const Shoes = require('./shoes');
const Precipitation = require('./precipitation');
const Bottom = require('./bottom');
const Accessory = require('./accessory');

Weather.hasMany(Accessory);
Accessory.belongsToMany(Weather);

Weather.hasMany(Bottom);
Bottom.belongsToMany(Weather);

Weather.hasMany(Precipitation);
Precipitation.belongsToMany(Weather);

Weather.hasMany(Shoes);
Shoes.belongsToMany(Weather);

Weather.hasMany(Top);
Top.belongsToMany(Weather);

module.exports = {
  Weather,
  User,
  Top,
  Shoes,
  Precipitation,
  Bottom,
  Accessory
};
