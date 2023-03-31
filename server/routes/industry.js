const express = require('express');
const router = express.Router();

const industriesControllers = require('../controllers/industriesControllers');

router.post('/industry', industriesControllers.getIndustries);

module.exports = router;
