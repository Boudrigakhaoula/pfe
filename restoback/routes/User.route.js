const express = require('express');
const router = express.Router();
const UserSchema = require('../models/User.model');
const bcrypt = require('bcryptjs');

// email regex
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Add User route
router.post('/', async (req, res) => {
    const { email, password, firstName, lastName, phone, dateOfBirth, adress } = req.body;

    // check if all fields are filled
    if (email === '' || password === '' || firstName === '' || lastName === '' || phone === '' || dateOfBirth === '' || adress === '') {
        return res.json({ errormessage: 'Please enter all fields' });
    }

    if (!emailRegex.test(email)) {
        return res.json({ errormessage: 'Please enter a valid email' });
    }

    try {
        // Check if email already exists
        const existingUser = await UserSchema.findOne({ email });
        if (existingUser) {
            return res.json({ errormessage: "L'email existe déjà" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user
        const newUser = new UserSchema({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            phone,
            dateOfBirth,
            adress,
        });

        // save user
        await newUser.save();
        res.json({ successmessage: 'User added successfully' });
    } catch (error) {
        res.send({ errormessage: error });
    }
});


// Delete User route
router.delete('/:id', async (req, res) => {
    // check if User exists
    const founduser = await UserSchema.findById(req.params.id);
    if(!founduser) return res.json({errormessage: 'User not found'});

    try {
        const response = await UserSchema.findByIdAndDelete(req.params.id);
        res.json({successmessage: 'User deleted successfully'});
    } catch (error) {
        res.send({errormessage: error});
    }
});

// Update User  route`
router.put('/:id', async (req, res) => {
    const {email, firstName, lastName, phone, dateOfBirth, adress } = req.body;

    // check if all fields are filled
    if (email === '' || firstName === '' || lastName === '' || phone === '' || dateOfBirth === '' || adress === '') {
        return res.json({errormessage: 'Please enter all fields'});
    }

    if (!emailRegex.test(email)) {
        return res.json({errormessage: 'Please enter a valid email'});
    }

    // check if User exist
    const userFound = await UserSchema.findById(req.params.id);
    if(!userFound) return res.json({errormessage: 'User not found'});

    try {
        userFound.email = email;
        userFound.firstName = firstName;
        userFound.lastName = lastName;
        userFound.phone = phone;
        userFound.dateOfBirth = dateOfBirth;
        userFound.adress = adress;

        await userFound.save();
        res.json({successmessage: 'User updated successfully', data:userFound});
    } catch (error) {
        res.send({errormessage: error});
    }
});
// count  users
router.get('/nb_users', async (req, res) => {

    UserSchema.countDocuments({}).then((count) => {
        res.json({ count: count });
        console.log(count)
      }).catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Une erreur s\'est produite lors du calcul du nombre de clients.' });
      });
  
});

// Get User By id route
router.get('/:id', async (req, res) => {
    try {
        const user = await UserSchema.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.send({errormessage: error});
    }
});


// update password
router.put('/updatepassword/:id', async (req, res) => {
    const { id } = req.params;

    const { oldPassword, newPassword } = req.body;

    // check if all fields are filled
    if (oldPassword === '' || newPassword === '') {
        return res.json({errormessage: 
            'Veuillez renseigner tous les champs'});
    }

    // check if User exist
    const foundUser = await UserSchema.findById(id);
    if(!foundUser) return res.json({errormessage: 'User not found'});

    // check if old password is correct
    const validPassword = await bcrypt.compare(oldPassword, foundUser.password);
    if(!validPassword) return res.json({errormessage: 
        'Ancien mot de passe est incorrect'});

    // check if new password is different from old password
    if(oldPassword === newPassword) return res.json({errormessage: 'New password must be different from old password'});

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    try {
        foundUser.password = hashedPassword;
        await foundUser.save();
        res.json({successmessage: 
'Mot de passe mis à jour avec succès'});
    } catch (error) {
        res.send({errormessage: error});
    }

});



//Get all Users route
  router.get('/', async(req, res) => {
  try {
        const users = await UserSchema.find();
        res.json(users);
    } catch (error) {
        res.send({errormessage: error});
    }
  });



module.exports = router;
