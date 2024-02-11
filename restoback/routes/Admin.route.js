const express = require('express');
const router = express.Router();
const AdminSchema = require('../models/Admin.model');
const bcrypt = require('bcryptjs');

// email regex
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Add Admin route
router.post('/', async (req, res) => {
    const {email, password} = req.body;

    if (email === '' || password === '') {
        return res.json({errormessage: 'Please enter all fields'});
    }

    if (!emailRegex.test(email)) {
        return res.json({errormessage: 'Please enter a valid email'});
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new admin
    const newAdmin = new AdminSchema({
        email,
        password: hashedPassword
    });

    // save admin
    try {
        newAdmin.save();
        res.json({successmessage: 'Admin added successfully'});
    } catch (error) {
        res.send({errormessage: error});
    }

});

// Delete Admin route
router.delete('/:id', async (req, res) => {
    try {
        const admin = await AdminSchema.findById(req.params.id);
        await admin.remove();
        res.json({successmessage: 'Admin deleted successfully'});
    } catch (error) {
        res.send({errormessage: error});
    }
});

// Update Admin route`
router.put('/:id', async (req, res) => {
    const {email, password} = req.body;

    if (email === '' || password === '') {
        return res.json({errormessage: 'Please enter all fields'});
    }

    if (!emailRegex.test(email)) {
        return res.json({errormessage: 'Please enter a valid email'});
    }

    try {
        const admin = await AdminSchema.findById(req.params.id);
        admin.email = email;
        admin.password = password;
        await admin.save();
        res.json({successmessage: 'Admin updated successfully'});
    } catch (error) {
        res.send({errormessage: error});
    }
});

// Get all Admins route
router.get('/', async (req, res) => {
    try {
        const admins = await AdminSchema.find();
        res.json(admins);
    } catch (error) {
        res.send({errormessage: error});
    }
});


// Get Admin By id route
router.get('/:id', async (req, res) => {
    try {
        const admin = await AdminSchema.findById(req.params.id);
        res.json(admin);
    } catch (error) {
        res.send({errormessage: error});
    }
});

module.exports = router;
