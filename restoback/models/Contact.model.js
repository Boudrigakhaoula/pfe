const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    email: String,
    name: String,
    adress: String,
    ville: String,
    phone: String,
    urlInstagram: String,
    urlFacebook: String,
});

module.exports = mongoose.model('Contacts', contactSchema);
