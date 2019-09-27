const router = require('express').Router();
const { Weather } = require('../db/models');

router.get('/:temp', async (req, res, next) => {
  try {
    const temp = Number(req.params.temp);
    const weatherByTemp = await Weather.
  } catch (error) {
    next(error);
  }
});

module.exports = router;
