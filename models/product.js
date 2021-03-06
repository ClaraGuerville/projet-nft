// import mongo
const mongoose = require('mongoose');
// const unique_validator = require('mongoose-unique-validator');

const {Schema} = mongoose;

const productSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    owner: {
        // Clé étrangère
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    oeuvre: {
        type: String
    },
    category: {
        // Clé étrangère
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    likeCounter: {
        type: Number
    }
});

// productSchema.plugin(UniqueValidator);

module.exports = mongoose.model('Product', productSchema);

// Enute on importe le model dans un controller puis on continue comme ans l'exemple
