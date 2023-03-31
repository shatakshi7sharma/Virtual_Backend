const { Router } = require('express');
const router = Router();

const userRoutes  = require('./user');
const videoRoutes = require('./video');
const CountryRoutes = require('./country');
const industryRoutes = require('./industry');
const domainRoutes = require('./domain');

router.use('/user',userRoutes);
router.use('/user',videoRoutes);
router.use('/user',CountryRoutes);
router.use('/user',domainRoutes);
router.use('/user',industryRoutes);

module.exports = router;