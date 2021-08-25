const express = require('express');
const app = express();
const {readGame} = require('../controllers/game');

app.get('/game', readGame);

module.exports = app;