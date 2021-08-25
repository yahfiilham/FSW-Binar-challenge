const { validationResult } = require("express-validator");
// Data
let data = 
    [
        {
            id: 1,
            name: 'Yahfi Ilham',
            email: 'yahfi.ilham@gmail.com',
            nohp: '089517819502',
            password: "ajvand"
        },
        {
            id: 2,
            name: 'Evan',
            email: 'evan@gmail.com',
            nohp: '089517819854',
            password: "eryuhgvag"
        },
        {
            id: 3,
            name: 'Idan',
            email: 'idan@gmail.com',
            nohp: '089517819956',
            password: "ajvanjnfj"
        },
    ];

// READ all data 
exports.readDataUsers = (req, res) => {
    res.status(200).json({
        message: 'get users data, success',
        data,
    });
};

// READ data by id
exports.readDataUser = (req, res) => {
    id = req.params.id;
    const found = data.find(i => i.id === +id);

    if (found) {
        res.status(200).json({
            message: 'get detail user data, success!',
            data : found,
        });
    } else {
        res.send(404);
    }
};


// Creat data baru
exports.creatDataUsers = (req, res) => {
    // menghandle request body
    const {name, email, nohp, password} = req.body;

    // validasi input user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = new Error('Invalid Input Value!');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    // menangkap id secara otomatis
    const id = data[data.length - 1].id + 1;
    // menangkap request body
    const user = {id, name, email, nohp, password};

    // simpan ke data array
    data.push(user);

    res.status(201).json({
        message: `User with the name ${user.name} added to the database`,
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
    const {name, email, nohp, password} = req.body;

    // menangkap id
    id = req.params.id;
    const user = data.find(i => i.id === +id);

    if (name) user.name = name;
    if (email) user.email = email;
    if (nohp) user.nohp = nohp;
    if (password) user.password = password;

    res.status(200).json({
        message: `User with the name ${user.name} has been updated`,
        data: user,
    })

};


// delete data user
exports.deleteDataUsers = (req, res) => {
    id = req.params.id;
    data = data.filter(user => user.id !== +id);
    res.status(200).json({
        message: `User with the id ${id} deleted from the database.`,
    });
};

