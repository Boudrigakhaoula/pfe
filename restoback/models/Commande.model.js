const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const CommandeSchema = new Schema({
    User: {},
    Resto: String,
    Items: [],
    TotalPrice: String,
    Date: {
        type: String,
        default: moment().format('DD/MM/YYYY, h:mm:ss'),
    },
    Adresse: String,
});

module.exports = mongoose.model('Commandes', CommandeSchema);
