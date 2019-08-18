const Employee = require('../models/employees');


const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
    
}

employeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
    
}

employeeCtrl.createEmployee = async (req, res) => {
    
    const employee = new Employee(req.body);
    await employee.save();
    res.json({
        'status': 'Employee Saved'
    });
}

employeeCtrl.editEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        email_company: req.body.email_company,
        position: req.body.position,
        workplace: req.body.workplace,
        salary: req.body.salary,
        comments: req.body.comments,
        process: req.body.process,
        on_vacation: req.body.on_vacation,
        active: req.body.active

    };
    await Employee.findByIdAndUpdate(id, {$set: employee});
    res.json({status: 'Employee Update'});
}

employeeCtrl.deleteEmployee =   async (req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.json({status: 'Employee Deleted'});
}

module.exports = employeeCtrl;