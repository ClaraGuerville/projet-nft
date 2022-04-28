/*MODEL MODEL MODEL MODEL MODEL MODEL MODEL */

// import mongo
const mongoose = require('mongoose');
const UniqueValidator = require('mongoose-unique-validator');

const {Schema} = mongoose;

const userSchema = new Schema({
	pseudo: {
		type: String, 
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String
	}
});

// vérification d'unicité, si existe : erreur
userSchema.plugin(UniqueValidator);

module.exports = mongoose.model('User', userSchema);