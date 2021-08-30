const data = require('./../../data/users.json');

readGame = (req, res) => {
    res.render('game');
};

postGame = (req, res) => {
    const { username, password } = req.body;
    data.map((item) => {
        // jika username dan password sama kirim token
        if (item.username == username && item.password == password) {
            res.render('game');
        } 
    });

    res.redirect('/login');
};

module.exports = {readGame, postGame};