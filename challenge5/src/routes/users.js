const express = require('express');
const router = express.Router();
const {body} = require('express-validator');

const {creatDataUsers, readDataUsers, readDataUser, updateDataUsers, deleteDataUsers} = require('../controllers/users');

// CREAT data -> method --> post
router.post('/',
    [
        // validasi req body
        body('email').isEmail().withMessage('Invalid Email!'),
        body('nohp').isMobilePhone('id-ID').withMessage('Invalid Mobile Phone Number!'),
        body('password').isLength({ min: 7 }).withMessage('Invalid Password!, your password must have minimum 7 characters')
    ], creatDataUsers);


// READ all data users -> method --> get
router.get('/', readDataUsers);

// READ data user by id -> method --> get
router.get('/:id', readDataUser);

// UPDATE user data -> method --> put
router.put('/:id', [
    // validasi req body
    body('email').isEmail().withMessage('Invalid Email!'),
    body('nohp').isMobilePhone('id-ID').withMessage('Invalid Mobile Phone Number!'),
    body('password').isLength({ min: 7 }).withMessage('Invalid Password!, your password must have minimum 7 characters')
], updateDataUsers);

// DELETE user data -> method --> delete
router.delete('/:id', deleteDataUsers);



module.exports = router;