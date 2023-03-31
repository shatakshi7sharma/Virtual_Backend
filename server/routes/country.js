const express = require('express');
const router = express.Router();

const countriesControllers = require('../controllers/countriesControllers');

router.post('/country',countriesControllers.getCountries);

module.exports = router;
