const Weather = require('./weather');
const User = require('./user');
const Top = require('./top');
const Shoes = require('./shoes');
const Precipitation = require('./precipitation');
const Bottom = require('./bottom');
const Accessory = require('./accessory');
const Coat = require('./coat');

Weather.hasMany(Coat);
Coat.hasMany(Weather);

Weather.hasMany(Accessory);
Accessory.hasMany(Weather);

Weather.hasMany(Bottom);
Bottom.hasMany(Weather);

Weather.hasMany(Precipitation);
Precipitation.hasMany(Weather);

Weather.hasMany(Shoes);
Shoes.hasMany(Weather);

Precipitation.hasOne(Shoes);
Shoes.hasMany(Precipitation);

Weather.hasMany(Top);
Top.hasMany(Weather);

module.exports = {
  Weather,
  User,
  Top,
  Shoes,
  Precipitation,
  Bottom,
  Accessory,
  Coat
};
