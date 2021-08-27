const express = require('express');
const router = express.Router();
const {readGame} = require('../controllers/game');

router.get('/', readGame);

module.exports = router;