const express = require('express');

const homeRoutes = require('./src/routes/home');
const gameRoutes = require('./src/routes/game');
const usersRoutes = require('./src/routes/users');
const loginRoutes = require('./src/routes/login');

const app = express();
const port = 8000;

// Menngunakan ejs
app.set('view engine', 'ejs');
// To support URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Built-in middleware
app.use(express.static('public'));
app.use(express.json());

// Manggil restfull api users
app.use('/users', usersRoutes);

// buat middleware buat jagain route game
app.use((req, res, next) => {
    if (req.path === '/' || req.path === '/users/login' || req.path === '/login') {
        next();
    } else if (req.path === '/game') {
        // console.log(req.query.isLogin); // /game?isLogin=true
        if (req.query.isLogin == 'true') {
            next();
        } else {
            res.redirect('/login');
        }
    } 
});

// challengge 3
app.use('/', homeRoutes);

// challenge 4
app.use('/game', gameRoutes);

// challenge 5
app.use('/login', loginRoutes);

// membuat default error response
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