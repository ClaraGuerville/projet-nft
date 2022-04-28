/**
 * 'res.render'
 * afficher la mm vue pour le moment
 * passe parametre à la vue
 * sinon donnée à passer à la vue pour les réutiliser dans la vue.
 * 
 * res.redirect('/') pour suppression par exemple
 *
 * peut fusionner les 2 get / post avec condition ou séparer dans 2 méthodes
 * console.log(req.body)
 *
 * next : fait passer la req à la prochaine fonction
 */

exports.create_get = (req, res, next)=>{
	// chemin vers le formulaire
	res.render('album/create');
};

exports.create_post = (req, res, next)=>{
	// chemin vers la liste des albums
	res.redirect('/albums');
};

exports.index = (req, res, next)=>{
	// chemin vers la liste des albums
	res.render('home/index');
};