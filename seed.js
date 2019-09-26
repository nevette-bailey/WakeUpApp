'use strict';

const db = require('./server/db');
const { Weather, Shoes } = require('./server/db/models');
const chalk = require('chalk');

//creates possible weather conditions

const seed = async () => {
  try {
    let weather = []
    for (let i = 10; i <= 120; i++) {
      weather.push(i)
    }
    console.log(weather, 'weather')
    await db.sync({ force: true });
    await Promise.all(
      weather.map((temp) => {
        return Weather.create(temp);
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
