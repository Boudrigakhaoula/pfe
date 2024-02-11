const express = require('express');
const router = express.Router();
const CommandeSchema = require('../models/Commande.model');
const jwt = require('jsonwebtoken');


// Add Commande route
router.post('/', async (req, res) => {

    const {User, Resto, Items, TotalPrice, Adress} = req.body;

    if(User === '' || Resto === '' || Items === '' || TotalPrice === '' || Adress === ''){
        return res.json({errormessage: 'Please enter all fields'});
    }

    // create Contact
    const newCommande = new CommandeSchema({
        User : User,
        Resto : Resto,
        Items : Items,
        TotalPrice : TotalPrice,
        Adresse : Adress
    });

    // save admin
    try {
        newCommande.save();
        res.json({successmessage: 'Commande added successfully'});
    } catch (error) {
        res.send({errormessage: error});
    }

});

// Delete Commande route
router.delete('/:id', async (req, res) => {

    try {
        const commande = await CommandeSchema.findById(req.params.id);
        await commande.remove();
        res.json({successmessage: 'Commande deleted successfully'});
    } catch (error) {
        res.send({errormessage: error});
    }
});

// Get all Contacts route
router.get('/', async (req, res) => {
    try {
        const commande = await CommandeSchema.find();
        res.json(commande);
    } catch (error) {
        res.send({errormessage: error});
    }
});

// Get Contact By id route
 //count number of  menu
 router.get('/nb/:id', async (req, res) => {
    try {
      const restoId = req.params.id;
  
      const count = await CommandeSchema.countDocuments({ Resto: restoId });

      res.send({ count });
    } catch (error) {
      res.send({ errorMessage: error });
    }
  });
//   router.get('/nbc/:id', async (req, res) => {
//     try {
//         const adminResto = await CommandeSchema.User.findById(req.params.id);
//         const documents = await CommandeSchema.countDocuments({ User: adminResto.id });

//       const documents1 = await CommandeSchema.countDocuments({ User: adminResto });
    
  
//       res.send({ documents });
//     } catch (error) {
//       res.send({ errorMessage: error });
//     }
//   });
  
  
// router.get('/nbc/:id', async (req, res) => {
//     try {
//       const userId = req.params.id;
    
//       const count = await CommandeSchema.countDocuments({ User: userId });
  
//       res.send({ count });
//     } catch (error) {
//       res.send({ errorMessage: error });
//     }
//   });
router.get('/nb/:clientId/:restoId', async (req, res) => {
    try {
      const clientId = req.params.clientId;
      const restoId = req.params.restoId;
  
      const commandes = await CommandeSchema.aggregate([
        {
          $match: {
            User: clientId,
            Resto: restoId,
          },
        },
        {
          $group: {
            _id: '$User',
            count: { $sum: 1 },
          },
        },
      ]);
  
      if (commandes.length === 0) {
        res.send({ errorMessage: 'Aucune commande trouvée pour ce client dans ce restaurant.' });
      } else {
        res.send({ count: commandes[0].count });
      }
    } catch (error) {
      res.send({ errorMessage: error });
    }
  });

module.exports = router;
