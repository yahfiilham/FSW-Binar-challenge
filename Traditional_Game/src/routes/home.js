const express = require('express');
const router = express.Router();
const {readHome} = require('../controllers/home')

// challengge 3
// READ -> get
router.get('/', readHome) 

module.exports = router;