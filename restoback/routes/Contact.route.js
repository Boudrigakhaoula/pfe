const express = require('express');
const router = express.Router();
const ContactSchema = require('../models/Contact.model');
const jwt = require('jsonwebtoken');
// email regex
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Add Contact route
router.post('/', async (req, res) => {
    const {email, name, adress, ville, phone, urlInstagram, urlFacebook} = req.body;

    if (email === '' || name === '' || adress === '' || ville === '' || phone === '' || urlInstagram === '' || urlFacebook === '') {
        return res.json({errormessage: 'Please enter all fields'});
    }

    if (!emailRegex.test(email)) {
        return res.json({errormessage: 'Please enter a valid email'});
    }
    // create Contact
    const newContact = new ContactSchema({
        email,
        name,
        adress,
        ville,
        phone,
        urlInstagram,
        urlFacebook
    });

    // save admin
    try {
        newContact.save();
        res.json({successmessage: 'Contact added successfully'});
    } catch (error) {
        res.send({errormessage: error});
    }

});

// Delete Contact route
router.delete('/:id', async (req, res) => {
    try {
        const contact = await ContactSchema.findByIdAndDelete(req.params.id);
        res.json({successmessage: 'Contact deleted successfully'});
    } catch (error) {
        res.send({errormessage: error});
    }
});


// Get all Contacts route
router.get('/', async (req, res) => {
    try {
        const contact = await ContactSchema.find();
        res.json(contact);
    } catch (error) {
        res.send({errormessage: error});
    }
});

// Get Contact By id route
router.get('/:id', async (req, res) => {
    try {
        const contact = await ContactSchema.findById(req.params.id);
        res.json(contact);
    } catch (error) {
        res.send({errormessage: error});
    }
});

module.exports = router;
