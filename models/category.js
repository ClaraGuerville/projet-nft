// import mongo
const mongoose = require('mongoose');
// const unique_validator = require('mongoose-unique-validator');

const {Schema} = mongoose;

const categorySchema = new Schema({

    name: {
        type: String,
        required: true
    },
});

// productSchema.plugin(UniqueValidator);

module.exports = mongoose.model('Category', categorySchema);

// Enute on importe le model dans un controller puis on continue comme ans l'exemple
