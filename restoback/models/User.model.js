const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    phone: String,
    adress: String,
});

module.exports = mongoose.model('Users', userSchema);
