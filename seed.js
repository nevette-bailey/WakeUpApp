'use strict';

const db = require('./server/db/database');
const { Weather, Shoe, Weather_Shoe } = require('./server/db/models');

const chalk = require('chalk');

//creates possible weather conditions
const tempArr = [
  [10, 20],
  [20, 30],
  [30, 40],
  [40, 50],
  [50, 60],
  [60, 65],
  [65, 70],
  [70, 75],
  [75, 80],
  [80, 85],
  [85, 90],
  [90, 95],
  [95, 100],
  [100, 120]
];

//creates types of shoes
const shoesArr = [
  'flip flops',
  'sandals',
  'sneakers',
  'dress shoes',
  'boots',
  'rain boots',
  'snow boots',
  'insulated boots'
];

//URIs for shoe images
const shoeURIs = [
  'https://image.flaticon.com/icons/svg/2113/2113993.svg',
  'https://image.flaticon.com/icons/svg/1398/1398488.svg',
  'https://image.flaticon.com/icons/svg/1901/1901148.svg',
  'https://image.flaticon.com/icons/svg/2114/2114044.svg',
  'https://image.flaticon.com/icons/svg/2033/2033853.svg',
  'https://image.flaticon.com/icons/svg/2114/2114047.svg',
  'https://image.flaticon.com/icons/svg/1254/1254479.svg',
  'https://image.flaticon.com/icons/svg/1402/1402613.svg'

]

//for populating the join table for weather and shoes
const weather_shoe = [
  { weatherId: 1, shoId: 8 },
  { weatherId: 2, shoId: 8 },
  { weatherId: 3, shoId: 8 },
  { weatherId: 4, shoId: 5 },
  { weatherId: 5, shoId: 5 },
  { weatherId: 5, shoId: 4 },
  { weatherId: 5, shoId: 3 },
  { weatherId: 6, shoId: 3 },
  { weatherId: 6, shoId: 4 },
  { weatherId: 6, shoId: 5 },
  { weatherId: 7, shoId: 3 },
  { weatherId: 7, shoId: 4 },
  { weatherId: 7, shoId: 5 },
  { weatherId: 8, shoId: 2 },
  { weatherId: 8, shoId: 3 },
  { weatherId: 8, shoId: 4 },
  { weatherId: 9, shoId: 1 },
  { weatherId: 9, shoId: 2 },
  { weatherId: 9, shoId: 3 },
  { weatherId: 9, shoId: 4 },
  { weatherId: 10, shoId: 1 },
  { weatherId: 10, shoId: 2 },
  { weatherId: 10, shoId: 3 },
  { weatherId: 10, shoId: 4 },
  { weatherId: 11, shoId: 1 },
  { weatherId: 11, shoId: 2 },
  { weatherId: 11, shoId: 4 },
  { weatherId: 12, shoId: 1 },
  { weatherId: 12, shoId: 2 },
  { weatherId: 12, shoId: 4 },
  { weatherId: 13, shoId: 1 },
  { weatherId: 13, shoId: 2 },
  { weatherId: 13, shoId: 4 },
  { weatherId: 14, shoId: 1 },
  { weatherId: 14, shoId: 2 },
  { weatherId: 14, shoId: 4 }
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      tempArr.map((temp, index) => {
        return Weather.create({ id: index + 1, temperature: temp });
      })
    );
    await Promise.all(
      shoesArr.map((shoe, index) => {
        return Shoe.create({ id: index + 1, kind: shoe, shoeURI: shoeURIs[index] });
      })
    );

    await Promise.all(
      weather_shoe.map((pair) => {
        return Weather_Shoe.create(pair);
      })
    );

    console.log(chalk.green('Seeding success!'));
    db.close();
  } catch (error) {
    console.error(chalk.red('Oh noes! Something went wrong!'));
    console.error(error);
    db.close();
  }
};

seed();
