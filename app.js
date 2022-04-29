const express = require('express');

const mongoose = require('mongoose');
// Module natif pour acceder au chemin des fichiers
const path = require('path');



const password = require('./configurations/const');
// console.log(password);
// ne pas oublier de retirer les chevrons <password> avec le mot de passe
// const dsn = `mongodb+srv://nftuser:<password>@cluster0.ox4r2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const dsn = `mongodb+srv://nftuser:${password}@cluster0.ox4r2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const dsn = `mongodb+srv://nftuser:t9xLXM3BNYv9gC8L@cluster0.ox4r2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


const cookie = require('cookie-parser');
const session = require('express-session')

// connexion DB
 mongoose.connect(dsn);

// routers
const homeRouter = require('./routes/home');
const albumRouter = require('./routes/album');

const productCtrl = require('./routes/product');
const app = express();

// définir un moteur de template
app.set('view engine', 'ejs');

// middleware traitement formulaire (permet d'intercepter le contenu des requetes)
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Indiquer les ressources avec le static
app.use(express.static(path.join(__dirname, 'pulbic')));

// ------------------------------------------------------------
app.use(cookie);
app.set('trust proxy', 1) // trust first proxy
// app.use(session);
app.use(session({
// secret represente le cookie de la session
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        // secure à false car on est en http et pas https
         secure: false,
         expires: 1000*60*60
    }
  }))
// -------------------------------------------------------------
app.use(homeRouter);
app.use('/album', albumRouter);

app.use('/products', productCtrl);

// On fait une fonction callback
//On met en place un middleware (use) il peut intercepter tout type de requete (GET, POST , etc)
 
// app.use((request, response) => {
//     // Faire quelquechose
//     response.send('Message reçu et nodemon actif');
// });

// On exporte notre application
module.exports = app;