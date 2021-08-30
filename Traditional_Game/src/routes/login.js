const express = require('express');
const router = express.Router();

const {readLogin} = require('../controllers/login');

router.get('/', readLogin);

module.exports = router;