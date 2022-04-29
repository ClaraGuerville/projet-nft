// import mongo
const mongoose = require('mongoose');
const unique_validator = require('mongoose-unique-validator');

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
        type: String,
    },

});

userSchema.plugin(UniqueValidator);

module.exports = mongoose.model('User', userSchema);

// Enute on importe le model dans un controller puis on continue comme ans l'exemple