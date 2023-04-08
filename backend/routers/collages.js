const express = require("express");
const router = express.Router();
const collages = require("../models/collages");

router.get('/', async (req, res) => {
  try {
    const data = await collages.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;