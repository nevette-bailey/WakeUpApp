'use strict';

const db = require('./server/db');
const { Weather, Shoes } = require('./server/db/models');
const chalk = require('chalk');

//creates possible weather conditions

const seed = async () => {
  try {
    let tempArr = [];
    for (let i = 10; i <= 120; i++) {
      tempArr.push(i);
    }
    await db.sync({ force: true });
    await Promise.all(
      tempArr.map((temp) => {
        return Weather.create({temperature: temp});
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
