const express = require('express');
const router = express.Router();

const videosControllers = require('../controllers/videosControllers');

router.post('/video',videosControllers.getVideos);

module.exports = router;
