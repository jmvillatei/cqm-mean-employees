const express = require('express');
const router = express.Router();

const user = require('../controllers/user.controller');

router.get('/users', user.getUsers);



router.get('/users/:id', user.getUser);

router.post('/users', user.createUser);

router.put('/users/:id', user.editUser);

router.delete('/users/:id', user.deleteUser);


module.exports = router;