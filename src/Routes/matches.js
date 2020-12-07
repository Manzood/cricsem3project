const express = require('express');
const router = express.Router();

const item = require('../models/item')

router.get('/', (req, res) => {
    item.find()
    .sort({date: 1})
    .then(items => res.json(items))
});

module.exports = router;