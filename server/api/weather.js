const router = require('express').Router();
const { Weather, Shoe } = require('../db/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/:temp', async (req, res, next) => {
  try {
    const temp = Number(req.params.temp);
    const weatherByTemp = await Weather.findAll({
      where: {
        [Op.contains]: temp
      },
      include: [{ model: Shoe }]
    });
    res.json(weatherByTemp);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
