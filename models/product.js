/*MODEL MODEL MODEL MODEL MODEL MODEL MODEL */

// import mongo
const mongoose = require('mongoose');

const {Schema} = mongoose;

const productSchema = new Schema({
	title: {
		type: String, 
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	image: {
		type: String
	},
	creator: {
		type: String,
		required: true
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('Product', productSchema);
