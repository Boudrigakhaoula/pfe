const express = require('express');
const router = express.Router();
const AdminRestSchema = require('../models/AdminResto.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// email regex
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

 //count number of  menu
 router.get('/nb/:id', async (req, res) => {
    try {
      const adminResto = await AdminRestSchema.findById(req.params.id);
      const menu = adminResto.Menu;
  
      const categories = menu.map(item => item.category);
  
      console.log(categories);
  
      const uniqueCategories = new Set(categories);
      const count = uniqueCategories.size; // Nombre d'éléments uniques dans les catégories
  
      // Filtrer les éléments de la catégorie "dessert"
      const desserts = menu.filter(item => item.category === 'dessert');
  
      res.send({ count, desserts });
    } catch (error) {
      res.send({ errormessage: error });
    }
  });
  //count number of suite
  router.get('/nbsuite/:id', async (req, res) => {
    try {
      const adminResto = await AdminRestSchema.findById(req.params.id);
      const menu = adminResto.Menu;
  
      const categories = menu.map(item => item.category);
  
      // Filtrer les éléments de la catégorie "dessert"
      const desserts = menu.filter(item => item.category === 'Suite');
  
      // Afficher les catégories
      console.log(desserts);
  
      const uniqueCategories = new Set(desserts);
      const count = uniqueCategories.size; // Nombre d'éléments uniques dans les catégories
  
      res.send({ count, });
    } catch (error) {
      res.send({ errormessage: error });
    }
  });
  // count number of dessert
  router.get('/nbDessert/:id', async (req, res) => {
    try {
      const adminResto = await AdminRestSchema.findById(req.params.id);
      const menu = adminResto.Menu;
  
      const categories = menu.map(item => item.category);
  
      // Filtrer les éléments de la catégorie "dessert"
      const desserts = menu.filter(item => item.category === 'Dessert');
  
      // Afficher les catégories
      console.log(desserts);
  
      const uniqueCategories = new Set(desserts);
      const count = uniqueCategories.size; // Nombre d'éléments uniques dans les catégories
  
      res.send({ count, });
    } catch (error) {
      res.send({ errormessage: error });
    }
  });
  // count number of entree
  router.get('/nbEntree/:id', async (req, res) => {
    try {
      const adminResto = await AdminRestSchema.findById(req.params.id);
      const menu = adminResto.Menu;
  
      const categories = menu.map(item => item.category);
  
      // Filtrer les éléments de la catégorie "dessert"
      const desserts = menu.filter(item => item.category === 'Entrée');
  
      // Afficher les catégories
      console.log(desserts);
  
      const uniqueCategories = new Set(desserts);
      const count = uniqueCategories.size; // Nombre d'éléments uniques dans les catégories
  
      res.send({ count, });
    } catch (error) {
      res.send({ errormessage: error });
    }
  });
      
   

  
// Add Admin Rest route
router.post('/', async (req, res) => {
    const {TokenAdmin, email, password, name, address, phone, ville, urlFacebook, urlInstagram, UrlImage  } = req.body;

   // check if all fields are filled
    if (email === '' || password === '' || name === '' || address === '' || phone === '' || ville === '' || urlFacebook === '' || urlInstagram === '' || UrlImage === '' ) {
            return res.json({errormessage: 
              'Veuillez renseigner tous les champs'});
    }

    if (!emailRegex.test(email)) {
        return res.json({errormessage: 'Veuillez saisir une adresse e-mail valide'});
    }

    // check if admin token is valid (convert token and get role field form it)
    const { role } = jwt.verify(TokenAdmin, process.env.TOKEN_SECRET);

    if (role !== 'admin') {
        return res.json({errormessage: 'Non autorisé'});
    }
// email is already
    const existingAdmin = await AdminRestSchema.findOne({ email });
if (existingAdmin) {
  return res.json({ errormessage: 
    'Cet e-mail est déjà enregistré'});
}
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new admin
    const newAdminResto = new AdminRestSchema({
        email,
        password: hashedPassword,
        name,
        address,
        phone,
        ville,
        urlFacebook,
        urlInstagram,
        UrlImage,

        Menu: [],
        Avis: [],
        Commandes: []
    });


    // Create a json exemple of admin Resto

    // save admin
    try {
        newAdminResto.save();
        res.json({successmessage: 'Admin Resto ajouté avec succès'});
    } catch (error) {
        res.send({errormessage: error});
    }

});

// Delete Admin Resto route
router.delete('/:id', async (req, res) => {

    // check if admin Resto exists
    const adminResto = await AdminRestSchema.findById(req.params.id);
    if(!adminResto) return res.json({errormessage: 'Admin Resto introuvable'});

    try {
        const adminResto = await AdminRestSchema.findByIdAndDelete(req.params.id);
        res.json({successmessage: ' Admin Resto supprimé avec succès'});
    } catch (error) {
        res.send({errormessage: error});
    }
});

// Update Admin Resto route`
router.put('/:id', async (req, res) => {
    const {email, name, address, phone, ville, urlFacebook, urlInstagram, UrlImage, description,Menu, Avis, Commandes } = req.body;

    // check if all fields are filled
    if (email === '' || name === '' || address === '' || phone === '' || ville === '' || urlFacebook === '' || urlInstagram === '' || UrlImage === '') {
        return res.json({errormessage: 'Veuillez renseigner tous les champs'});
    }

    if (!emailRegex.test(email)) {
        return res.json({errormessage:  'Veuillez saisir une adresse e-mail valide'});
    }

    // check if admin Resto exist
    const adminResto = await AdminRestSchema.findById(req.params.id);
    if(!adminResto) return res.json({errormessage: 
      'Resto administrateur introuvable'});

    try {
        adminResto.email = email;
        adminResto.name = name;
        adminResto.address = address;
        adminResto.phone = phone;
        adminResto.ville = ville;
        adminResto.urlFacebook = urlFacebook;
        adminResto.urlInstagram = urlInstagram;
        adminResto.UrlImage = UrlImage;
        adminResto.Menu = Menu;
        adminResto.Avis = Avis;
        adminResto.Commandes = Commandes;

        await adminResto.save();
        res.json({successmessage:  'Admin Resto mis à jour avec succès, adminResto'});
    } catch (error) {
        res.send({errormessage: error});
    }
});


// count  resto
router.get('/nb_resto',  (req, res) => {
    AdminRestSchema.countDocuments({})
    .then((count) => {
      res.json({ count: count });
      console.log(count);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Une erreur s'est produite lors du calcul du nombre de clients." });
    });

});

//Get all Admins Resto route

router.get('/',async (req, res) => {
   try {
        const adminsResto = await AdminRestSchema.find();
        res.json(adminsResto);
    } catch (error) {
        res.send({errormessage: error});
    }
});

// Get Admin Resto By id route
router.get('/:id', async (req, res) => {
    try {
        const adminResto = await AdminRestSchema.findById(req.params.id);
        res.json(adminResto);
    } catch (error) {
        res.send({errormessage: error});
    }
  });

// update profil 
router.put('/newprofil/:id', async (req, res) => {
    const {name, address, phone, ville, urlFacebook,urlInstagram,  UrlImage} = req.body;

    // check if all fields are filled
    if (name === '' || address === '' || phone === '' || ville === '' || urlFacebook === '' || urlInstagram === ''|| UrlImage === '') {
        return res.json({errormessage: 
          'Veuillez renseigner tous les champs'});
    }

 

    // check if User exist
    const adminResto = await AdminRestSchema.findById(req.params.id);
    if(!adminResto) return res.json({errormessage: " Admin Resto  introuvable"});

    try {
        adminResto.name = name;
        adminResto.address = address;
        adminResto.phone = phone;
        adminResto.ville = ville;
        adminResto.urlFacebook = urlFacebook;
        adminResto.urlInstagram = urlInstagram;
        adminResto.UrlImage = UrlImage;

        await adminResto.save();
        res.json({successmessage: 
          "Admin resto mis à jour avec succès", data:adminResto});
    } catch (error) {
        res.send({errormessage: error});
    }
});
 
  
module.exports = router;
