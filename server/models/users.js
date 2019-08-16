const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    first_name: { type: String, required: true },
    surname: { type: String, required: true },
    sec_surname: { type: String, required: true },
    nickname: { type: String, required: true },
    email_company: { type: String, required: false },
    active: { type: Boolean, default: false }
});

module.exports = mongoose.model('user', UserSchema)