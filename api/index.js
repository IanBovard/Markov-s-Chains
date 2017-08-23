const express = require('express');
const router = express.Router();

let textRoutes = require('./text');

router.use('/texts', textRoutes);

module.exports = router;