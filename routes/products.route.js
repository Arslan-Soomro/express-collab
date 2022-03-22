const express = require('express');
const router = express.Router();
const dumData = require('../dummyData');

router.get('/', (req, res) => {
    res.json(dumData.productsData);
});

module.exports = router;