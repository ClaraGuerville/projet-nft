const express = require('express');
// instance du routeur
const router = express.Router();

// controllers
const homeCtrl = require('../controllers/homeCtrl');

// routes
// en premier paramètre: l'url qu'il faut intercepter
router.get('/', (resquest, response) =>{
    // rendre la vue
    response.render('home/index');
});

module.exports = router;