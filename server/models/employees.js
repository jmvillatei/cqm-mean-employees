const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    first_name: {type: String, required: true},
    surname: {type: String, required: true},
    sec_surname: {type: String, required: true},
    email: {type: String, required: true},
    code: {type: Number, required: true},
    phone: {type: Number, required: true},
    birthdate: {type: Date, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},

    email_company: {type: String, required: false},
    position: {type: String, required: false},
    workplace: {type: String, required: false},
    salary: {type: Number, required: false},

    comments: {type: String, required: false},
    
    
    contract: {type: String, default: "NULL"},    
    process: {type: String, default: "INNEGOTATION"},
    on_vacation: {type: Boolean, default: false},
    active: {type: Boolean, default: false}
});

module.exports = mongoose.model('employee', EmployeeSchema)

    