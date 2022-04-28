// besoin de lexpress
const express = require('express');

const router = express.Router();

/**
 * Intercepté type get si qqn tape 'create' afficher le album/create
 */
router.get('/create', (req, res)=>{
	res.render('album/create');
});

/**
 * Intercepté type post s'il existe
 */
router.post('/create', (req, res)=>{
	/**
	 * afficher la mm vue pour le moment
	 * passe parametre à la vue
	 * sinon donnée à passer à la vue pour les réutiliser dans la vue.
	 */
	console.log(req.body)
	res.render('album/create', {success: 'post traité'});
	// res.redirect('/') pour suppression par exemple
});

module.exports = router;