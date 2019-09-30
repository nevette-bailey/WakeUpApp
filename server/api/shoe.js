const router = require('express').Router();
const Shoe = require('../db/models/shoe');
const Weather = require('../db/models/weather');

router.get('/', async (req, res, next) => {
  try {
    const allShoe = await Shoe.findAll();
    res.json(allShoe);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const shoe = await Shoe.findOne({
      where: {
        id: id
      },
      include: [{ model: Weather }]
    });
    if (shoe) {
      res.json(student);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
