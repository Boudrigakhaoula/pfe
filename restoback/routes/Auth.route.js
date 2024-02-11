const express = require('express');
const router = express.Router();
const AdminSchema = require('../models/Admin.model');
const UserSchema = require('../models/User.model');
const AdminRestoSchema = require('../models/AdminResto.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// email regex
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Login Admin route
router.post('/admin/login', async (req, res) => {
    // get email and password from req body
    const {email, password} = req.body;

    // check if email and password are empty
    if (email === '' || password === '') {
        return res.json({errormessage: 'Please enter all fields'});
    }

    // check if email is valid
    if (!emailRegex.test(email)) {
        return res.json({errormessage: 'Please enter a valid email'});
    }

    // check if admin exists
    const FoundAdmin = await AdminSchema.findOne({email});
    if (!FoundAdmin) return res.json({errormessage: 'Worng email or password'});

    // check if password is correct
    const validPassword = await bcrypt.compare(password, FoundAdmin.password);
    if (!validPassword) return res.json({errormessage: 'Worng email or password'});

    try {
        // create token
        const token = jwt.sign({ id: FoundAdmin._id, role: 'admin' }, process.env.TOKEN_SECRET);

        // send token
        res.json({
            successmessage: 'Admin Login successfully',
            token,
            FoundAdmin
        });

    } catch (error) {
        res.send({errormessage: error});
    }

});

// Login User route
router.post('/user/login', async (req, res) => {
    // get email and password from req body
    const {email, password} = req.body;

    // check if email and password are empty
    if (email === '' || password === '') {
        return res.json({errormessage: 'Please enter all fields'});
    }

    // check if email is valid
    if (!emailRegex.test(email)) {
        return res.json({errormessage: 'Please enter a valid email'});
    }

    // check if user exists
    const FoundUser = await UserSchema.findOne({email});
    if (!FoundUser) return res.json({errormessage: 'Worng email or password'});

    // check if password is correct
    const validPassword = await bcrypt.compare(password, FoundUser.password);
    if (!validPassword) return res.json({errormessage: 'Worng email or password'});

    try {
        // create token
        const token = jwt.sign({ id: FoundUser._id }, process.env.TOKEN_SECRET);

        // send token
        res.json({
            successmessage: 'Admin Login successfully',
            token,
            FoundUser
        });

    } catch (error) {
        res.send({errormessage: error});
    }
});

// Login Admin Resto route
router.post('/adminresto/login', async (req, res) => {
    // get email and password from req body
    const {email, password} = req.body;

    // check if email and password are empty
    if (email === '' || password === '') {
        return res.json({errormessage: 'Please enter all fields'});
    }

    // check if email is valid
    if (!emailRegex.test(email)) {
        return res.json({errormessage: 'Please enter a valid email'});
    }

    // check if user exists
    const FoundAdminRest = await AdminRestoSchema.findOne({email});
    if (!FoundAdminRest) return res.json({errormessage: 'Worng email or password'});

    // check if password is correct
    const validPassword = await bcrypt.compare(password, FoundAdminRest.password);
    if (!validPassword) return res.json({errormessage: 'Worng email or password'});

    try {
        // create token
        const token = jwt.sign({ id: FoundAdminRest._id }, process.env.TOKEN_SECRET);

        // send token
        res.json({
            successmessage: 'Admin Resto Login successfully',
            token,
            FoundAdminRest
        });

    } catch (error) {
        res.send({errormessage: error});
    }
});

module.exports = router;
