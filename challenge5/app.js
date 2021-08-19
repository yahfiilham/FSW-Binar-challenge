const express = require('express');
const app = express();
const port = 8000;

// Menngunakan ejs
app.set('view engine', 'ejs');

// Built-in middleware
app.use(express.static('public'));

// challengge 3
app.get('/', (req, res) => {
    res.render('challenge3/index');
})

// challenge 4
app.get('/game', (req, res) => {
    res.render('challenge4/game');
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})