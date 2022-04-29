/*ROUTE ROUTE ROUTE ROUTE ROUTE ROUTE ROUTE */

//////////////
// REQUIRES //
//////////////

// besoin de lexpress
const express = require('express');
// besoin du ctrl
const albumctrl = require('./../controllers/albumctrl');
// get router
const router = express.Router();

/**
 * Intercepter type get si qqn tape 'create' afficher le album/create
 * albumctrl.create
 */
router.get('/create', (req, res)=>{
	// chemin vers le formulaire
	res.render('album/create');
});

/**
 * Intercepter type post s'il existe
 *
 * Pour form pas long :
 * title: req.body.title, etc.
 * 
 * Sinon : spread operator : '...' dans un autre obj pour récupérer toutes les infos en réutilisant les clés.
 */
const Album = require('./../models/album');
router.post('/create', (req, res, next)=>{
	// persister une données
	const album = new Album({
		// recupère tout et le store
		...req.body
	});

	/**
	 * convention : err, result (:/ obj ou autre).
	 * php : fait tout, ici, method save.
	 */
	album.save((err, result)=>{
		// si error, cl.
		if (err) console.log(err);
		// sinon : chemin vers la liste des albums
		console.log(result)
		res.redirect('/albums');
	});
});

/**
 * intercept edit & id, rendre le formulaire du edit 
 */
router.get('/edit:id', (req, res)=>{
	res.render('album/edit');
});

router.post('/edit:id', (req, res)=>{
	res.render('album/edit');
});

/**
 * renvoyer à la page index
 */
router.get('/', (req, res, next)=>{
	// chemin vers la liste des albums
	res.render('album/index');
});

module.exports = router;