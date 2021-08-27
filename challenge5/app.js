const express = require('express');

const homeRoutes = require('./src/routes/home');
const gameRoutes = require('./src/routes/game');
const usersRoutes = require('./src/routes/users');

const app = express();
const port = 8000;

// Menngunakan ejs
app.set('view engine', 'ejs');

// Built-in middleware
app.use(express.static('public'));
app.use(express.json());

// challengge 3
app.use('/', homeRoutes);

// challenge 4
app.use('/game', gameRoutes);

// challenge 5
app.use('/users', usersRoutes);

// membuat default error response validasi
app.use((error, req, res, next) => {
    // membuat status yang dinamis dengan default error status 500
    const status = error.errorStatus || 500;
    // membuat error message dinamis
    const message = error.message;
    // membuat error data yang dinamis
    const data = error.data;

    res.status(status).json({message, data});
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});