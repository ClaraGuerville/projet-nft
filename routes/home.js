//////////////////////
// ROUTE'S REQUIRES //
//////////////////////
const express = require("express");
const homectrl = require('./../controllers/homectrl');

const router = express.Router();

/////////////////
//  GET & POST //
/////////////////
/**
 * défini les routes
 * celui de la page d'accueil : du get
 * qd personne met '/' dans nav, t'appelle du ctrl
 * correspond à notre controler
 * récupère sa méthode homeIndex
 */
router.get('/', (req, res)=>{

    // res.render('home/index', {user: req.session.user});
    router.get('/', homectrl.homeIndex)
})

/////////////
// EXPORTS //
/////////////
module.exports = router;