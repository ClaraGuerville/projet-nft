/**
 * creer instance de express et du router.
 */
const express = require("express");

const router = express.Router();

const homectrl = require('./../controllers/homectrl');

// controlers
/**
 * défini les routes
 * celui de la page d'accueil : du get
 * qd personne met '/' dans nav, t'appelle du ctrl
 * correspond à notre controler
 * récupère sa méthode homeIndex
 */
router.get('/', homectrl.homeIndex)

module.exports = router;