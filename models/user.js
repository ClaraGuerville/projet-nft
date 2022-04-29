//////////////////////
// MODEL'S REQUIRES //
//////////////////////
// mongo
const mongoose = require('mongoose');
// value validation : unique in ddb
const UniqueValidator = require('mongoose-unique-validator');
// defragmentation of mongoose, get the Schema
const {Schema} = mongoose;

//////////////
// USER DEF //
//////////////
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

// register the uniqueness verification plugin for the userSchema
userSchema.plugin(UniqueValidator);

////////////
// EXPORT //
////////////
module.exports = mongoose.model('User', userSchema);