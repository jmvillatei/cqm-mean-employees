const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    first_name: {type: String, required: true},
    surname: {type: String, required: true},
    sec_surname: {type: String, required: true},
    birthdate: {type: Date, required: true},
    email_company: {type: String, required: false},
    email: {type: String, required: false},
    position: {type: String, required: false},
    workplace: {type: String, required: false},
    salary: {type: Number, required: false},
    contract: {type: String, required: false},
    comments: {type: String, required: false},
    on_vacation: {type: Boolean, default: false},
    active: {type: Boolean, default: false}
});

module.exports = mongoose.model('employee', EmployeeSchema)