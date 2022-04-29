/*MODEL MODEL MODEL MODEL MODEL MODEL MODEL */

//////////////
// REQUIRES //
//////////////
const mongoose = require('mongoose');

// destructuration car récupère qu'un shéma dans strucutre mongoose
const {Schema} = mongoose;

/////////////////////
// CREATION SCHEMA //
/////////////////////

// créer notre propre shéma (comme MCD/MLD)
// bdd relationnelle
// voilà à quoi devrait ressembler un album
const albumSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	publishedAt: {
		type: Date,
		required: true
	}
});

// creer model, donne nom du model et l'obj
module.exports = mongoose.model('album', albumSchema);
