const express = require('express');

// routers
const homeRouter = require('./routes/home');

const app = express();

// définir un moteur de template
app.set('view engine', 'ejs');

app.use(homeRouter);

// On fait une fonction callback
//On met en place un middleware (use) il peut intercepter tout type de requete (GET, POST , etc)
 
// app.use((request, response) => {
//     // Faire quelquechose
//     response.send('Message reçu et nodemon actif');
// });

// On exporte notre application
module.exports = app;