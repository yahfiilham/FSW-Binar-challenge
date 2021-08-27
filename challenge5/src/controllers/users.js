const { v4: uuidv4 } = require('uuid'); // third-party-module -> membuat id random
const { validationResult } = require("express-validator");
// Data
let data = 
    [
        {
            id: 1,
            username: "yahfi",
            email: "yahfi.ilham@gmil.com",
            nohp: "089517819502",
            password: "ajvand"
        },
        {
            id: 2,
            username: "evan",
            email: "evan@gmail.com",
            nohp: "089517819854",
            password: "eryuhgvag"
        },
        {
            id: 3,
            username: "idan",
            email: "idan@gmail.com",
            nohp: "089517819956",
            password: "ajvanjnfj"
        },
    ];

// READ all data 
exports.readDataUsers = (req, res) => {
    if (data.length == 0) {
        res.status(400).json({
            status: 400,
            message: "Blank Data!, you have to enter your data",
            data,
        })
    } else {
        res.status(200).json({
            status: 200,
            message: 'Get users data, success',
            data,
        });
    }

};

// READ data by id
exports.readDataUser = (req, res) => {
    id = req.params.id;
    const found = data.find((i) => i.id == id);

    if (found) {
        res.status(200).json({
            status: 200,
            message: 'Get detail user data, success!',
            data : found,
        });
    } else {
        res.status(404).json({
            status: 404,
            message: `Data with the id ${id} not found!`,
        });
    }
};


// Creat data baru
exports.creatDataUsers = (req, res) => {
    // menghandle request body
    const {username, email, nohp, password} = req.body;

    // validasi input user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = new Error('Invalid Input Value!');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    // menangkap id secara otomatis dengan mudule uuid
    const id = uuidv4();
    // menangkap request body
    const user = {id, username, email, nohp, password};

    // simpan ke data array
    data.push(user);

    res.status(201).json({
        status: 201,
        message: `User with the username ${user.username} added to the database`,
        data: user,
    });
};


// update data -> berdasarkan id
exports.updateDataUsers = (req, res) => {
    // validasi input user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = new Error('Invalid Input Value!');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    // menghandle request body
    const {username, email, nohp, password} = req.body;

    // menangkap id
    id = req.params.id;
    const user = data.find((i) => i.id == id);

    if (username) user.username = username;
    if (email) user.email = email;
    if (nohp) user.nohp = nohp;
    if (password) user.password = password;

    res.status(200).json({
        status: 200,
        message: `User with the username ${user.username} has been updated`,
        data: user,
    })

};


// delete data user
exports.deleteDataUsers = (req, res) => {
    id = req.params.id;
    users = data;

    // errorr ketika id tidak ada di data
    newData = users.filter((user) => user.id != id);
    if (users.length == newData.length) {
        res.status(404).json({
            status: 404,
            message: `Data with the id ${id} not found!`,
        })
        return false;
    }
    
    // new data
    data = data.filter((user) => user.id != id);
    res.status(200).json({
        status: 200,
        message: `User with the id ${id} deleted from the database.`,
    });
};

