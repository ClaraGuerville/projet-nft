const express = require('express');

const app = express();

// On fait une fonction callback
//On met en place un middleware (use) il peut intercepter tout type de requete (GET, POST , etc)
 
app.use((request, response) => {
    // Faire quelquechose
    response.send('Message reçu et nodemon actif');
});

// On exporte notre application
module.exports = app;