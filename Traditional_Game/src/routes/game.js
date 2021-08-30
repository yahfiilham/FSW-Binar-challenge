const express = require('express');
const router = express.Router();
const {readGame, postGame} = require('../controllers/game');

router.get('/', readGame);
router.post('/', postGame);

module.exports = router;