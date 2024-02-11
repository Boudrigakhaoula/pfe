const express = require('express');
const router = express.Router();
const CategorySchema = require('../models/Category.model');
const jwt = require('jsonwebtoken');
// Add Category route
router.post('/nb', async (req, res) => {
    const { name, AdminToken } = req.body;

    if (name === '') {
        return res.json({ errormessage: 'Please enter all fields' });
    }

    // check if admin token is valid
    const { role } = jwt.verify(AdminToken, process.env.TOKEN_SECRET);

    if (role !== 'admin') {
        return res.json({ errormessage: 'UnAuthorized' });
    }

    // check if category already exists
    const foundCategory = await CategorySchema.findOne({ name });
    if (foundCategory) {
        return res.json({ errormessage: 'Category already exists' });
    }

    // create new category
    const newCategory = new CategorySchema({
        name,
    });

    // save Category
    try {
        newCategory.save();
        res.json({ successmessage: 'Category added successfully' });
    } catch (error) {
        res.send({ errormessage: error });
    }
});


// Delete Category route
router.delete('/:id', async (req, res) => {
    const {AdminToken} = req.body;

    // check if admin token is valid
    const { role } = jwt.verify(AdminToken, process.env.TOKEN_SECRET);

    if (role !== 'admin') {
        return res.json({errormessage: 'UnAuthorized'});
    }

    try {
        const category = await CategorySchema.findById(req.params.id);
        await category.remove();
        res.json({successmessage: 'Category successfully'});
    } catch (error) {
        res.send({errormessage: error});
    }
});

// Update Category route
router.put('/:id', async (req, res) => {
    const {name} = req.body;

    if (name === '') {
        return res.json({errormessage: 'Please enter all fields'});
    }

    // check if admin token is valid
    const { role } = jwt.verify(AdminToken, process.env.TOKEN_SECRET);

    if (role !== 'admin') {
        return res.json({errormessage: 'UnAuthorized'});
    }

    try {
        const category = await AdminSchema.findById(req.params.id);
        category.name = name;
        await category.save();
        res.json({successmessage: 'Category updated successfully'});
    } catch (error) {
        res.send({errormessage: error});
    }
});

// Get all Categorys route
router.get('/', async (req, res) => {
    try {
        const categorys = await CategorySchema.find();
        res.json(categorys);
    } catch (error) {
        res.send({errormessage: error});
    }
});

// Get Category By id route
router.get('/:id', async (req, res) => {
    try {
        const category = await CategorySchema.findById(req.params.id);
        res.json(category);
    } catch (error) {
        res.send({errormessage: error});
    }
});

module.exports = router;
