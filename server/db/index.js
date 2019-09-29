const Weather = require('./models/weather');
const User = require('./models/user');
const Top = require('./models/top');
const Shoe = require('./models/shoe');
const Precipitation = require('./models/precipitation');
const Bottom = require('./models/bottom');
const Accessory = require('./models/accessory');
const Coat = require('./models/coat');
const db = require('./database')

Weather.hasMany(Coat);
// Coat.hasMany(Weather);

Weather.hasMany(Accessory);
// Accessory.hasMany(Weather);

Weather.hasMany(Bottom);
// Bottom.hasMany(Weather);

Weather.hasMany(Precipitation);
// Precipitation.hasMany(Weather);

Weather.belongsToMany(Shoe, { through: 'Weather_Shoe' });
Shoe.belongsToMany(Weather, { through: 'Weather_Shoe' });

const Weather_Shoe = db.model('Weather_Shoe');

Precipitation.hasOne(Shoe);
// Shoes.hasMany(Precipitation);

Weather.hasMany(Top);
// Top.hasMany(Weather);

module.exports = {
  Weather,
  User,
  Top,
  Shoe,
  Precipitation,
  Bottom,
  Accessory,
  Coat,
  Weather_Shoe,
  db
};
