const express = require('express');
const router = express.Router();

const messageChainRoutes = require('./messages');
router.use('/messageChains', messageRoutes);

module.exports = router;