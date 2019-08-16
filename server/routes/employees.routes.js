const express = require('express');
const router = express.Router();

const employee = require('../controllers/employee.controller');

router.get('/employees', employee.getEmployees);

router.post('/employees', employee.createEmployee);

router.get('/employees/:id', employee.getEmployee);

router.put('/employees/:id', employee.editEmployee);

router.delete('/employees/:id', employee.deleteEmployee);



module.exports = router;