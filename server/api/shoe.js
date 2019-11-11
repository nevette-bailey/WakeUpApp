const router = require('express').Router();
const Shoe = require('../db/models/shoe');
const Weather = require('../db/models/weather');
const Sequelize = require('sequelize');

router.get('/', async (req, res, next) => {
  try {
    const allShoe = await Shoe.findAll();
    res.json(allShoe);
  } catch (error) {
    next(error);
  }
});

router.get('/:temp', async (req, res, next) => {
  try {
    const temp = Number(req.params.id);
    const shoes = await Shoe.findAll({
      include: [
        {
          model: Weather,
          where: { temperature: { [Sequelize.Op.contains]: temp } }
        }
      ]
    });
    if (shoes) {
      res.json(shoes);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
