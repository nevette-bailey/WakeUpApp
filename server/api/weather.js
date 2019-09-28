const router = require('express').Router();
const { Weather, Shoe } = require('../db/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// router.get('/')

router.get('/:temp', async (req, res, next) => {
  try {
    const temp = Number(req.params.temp);
    console.log(temp, 'WEATHER REQUEST');
    const weatherByTemp = await Weather.findAll({
      where: {
        [Op.contains]: temp
      },
      include: [{ model: Shoe }]
    });
    console.log(weatherByTemp, 'WEATHER HERE');
    res.json(weatherByTemp);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
