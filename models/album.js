const mongoose = require('mongoose');

const {Schema} = mongoose;

// Par défaut l'id se créer tout seul donc pas obligé de le définir
const albumSchema = new Schema({
    // Les clés doivent avoir le même nom que les name des inputs
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    publishedAt: {
        type: Date,
        require: true
    }
});

module.exports = mongoose.model('Album', albumSchema);