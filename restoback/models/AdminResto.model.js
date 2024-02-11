const { string } = require('i/lib/util');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminRestoSchema = new Schema({
    email: String,
    password: String,
    name: String,
    address: String,
    phone: String,
    ville: String,
    urlFacebook: String,
    urlInstagram: String,
    UrlImage: String,

    Menu: [{
        name: String,
        price: Number,
        urlImage: String,
        category: String,
        promo:String
    }],
    Avis: [{
        user: {},
        comment: String,
    }],
    Commandes: [{
        User: {},
        Items: {},
        TotalPrice: String,
        Date: String,
        Adresse: String,
    }],
});

module.exports = mongoose.model('AdminRestos', adminRestoSchema);
