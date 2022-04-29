/**
 * controller construit et rend la vue
 * attribue au fichier une méthode (nomme comme on veut)
 * accessible depuis l'extérieur avec un require.
 */
exports.homeIndex = (req, res)=>{
	// rend la vue de la page d'accueil
	res.render('home/index', {user: req.session.user});

};

