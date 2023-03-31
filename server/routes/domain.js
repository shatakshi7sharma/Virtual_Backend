const express = require('express');
const router = express.Router();

const domainsControllers = require('../controllers/domainsControllers');

router.post('/domain',domainsControllers.getDomains);

module.exports = router;
