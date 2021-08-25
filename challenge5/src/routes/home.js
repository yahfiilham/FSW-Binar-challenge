const express = require('express');
const app = express();
const {readHome} = require('../controllers/home')

// challengge 3
// READ -> get
app.get('/', readHome) 

module.exports = app;