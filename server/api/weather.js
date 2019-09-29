const router = require('express').Router();
const Weather = require('../db/models/weather');
const Shoe = require('../db/models/shoe');
const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

// router.get('/')

router.get('/', async (req, res, next) => {
  try {
    const allWeather = await Weather.findAll();
    if (allWeather) {
      res.json(allWeather);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

router.get('/:temp', async (req, res, next) => {
  try {
    const temp = Number(req.params.temp);
    console.log(temp, 'WEATHER REQUEST');
    const weatherByTemp = await Weather.findOne({
      where: {
        temperature: {
          [Sequelize.Op.contains]: temp
        }
      },
      include: [{ model: Shoe }]
    });
    // console.log(weatherByTemp, 'WEATHER HERE');
    if (weatherByTemp) {
      res.json(weatherByTemp);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

// router.get('/:temp', async (req, res, next) => {
//   try {
//     const temp = Number(req.params.temp);
//     const weatherInfo = await Weather.findOne({
//       where: {
//         temperature: {
//           $contains: temp
//         }
//       },
//       include: [{ model: Shoe }]
//     });
//     if (weatherInfo) {
//       res.json(weatherInfo);
//     } else {
//       res.sendStatus(404);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
