<<<<<<< HEAD:server/db/models/index.js
const Weather = require('./weather');
const User = require('./user');
const Top = require('./top');
const Shoe = require('./shoe');
const Precipitation = require('./precipitation');
const Bottom = require('./bottom');
const Accessory = require('./accessory');
const Coat = require('./coat');
const db = require('../database')
=======
const Weather = require('./models/weather');
const User = require('./models/user');
const Top = require('./models/top');
const Shoe = require('./models/shoe');
const Precipitation = require('./models/precipitation');
const Bottom = require('./models/bottom');
const Accessory = require('./models/accessory');
const Coat = require('./models/coat');
const db = require('./database')
>>>>>>> 6af25b9fb2ef8cbb33790edb940362877b327437:server/db/index.js

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
