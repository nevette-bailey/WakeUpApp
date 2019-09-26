'use strict';

const db = require('./server/db');
const { Weather, Shoes } = require('./server/db/models');
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

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      tempArr.map((temp) => {
        return Weather.create({ temperature: temp });
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
