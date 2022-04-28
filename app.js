//////////////
// REQUIRES //
//////////////

// import mongoose ORM
const mongoose = require('mongoose');

// module natif pour récup les chemins des fichiers
const path = require('path');

// import fwk express
const express = require('express');

const session = require('express-session');
const cookie = require('cookie-parser');

// const PWD = require('./constants').password;

// data source name : chaine vers la bdd 
const dsn = 'mongodb+srv://sirius:Mongodb42.@cluster0.zkaph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// récupère le rendu du router de home.js
const homeRouter = require('./routes/home');
// apporte dans app 2eme router
const albumsRouter = require('./routes/album');
// importe routes du user
const usersRouter = require('./routes/user');

////////////////////////
// CONNEXION DATABASE //
////////////////////////
mongoose.connect(dsn);

///////////////////
// App instance  //
///////////////////
// new : par déclaration qd plus gourment, mais sinon objet 
const app = express();

//////
//  //
//////
/**
 * pour utiliser un moteur de template, lui dit.
 * avec api pas besoin de faire ça car par de vue. application monolitique, si.
 * peut recevoir var indépendemment du coté serveur.
 * sécurise url. Permet de faire de l'héritage (pas ejs mais les autres oui) 
 * lister les actions, et en face, appelle ctlr.
 */
app.set('view engine', 'ejs');

/**
 * midllewares traitement des données. pourvoir intercepter le contenu des requetes.
 * parse du json et le met dans la request
 * renvoient object JS
 */
app.use(express.json()); 
app.use(express.urlencoded({extended: false }));
// indiquer les ressources avec le static()
app.use(express.static(path.join(__dirname, 'public')))

// use cookie & session
app.use(cookie);
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'vnfjsghzek4',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        expires: 1000*60*60
    }
}));

/**
 * js : pour que les req soit intercepter, lui dire s c du get, post etc.
 * créer middleware pour intercepter requete
 * peut importe requete qu'on envoie (get/post), use intercepte
 *
 * middleware 'use(avec function callback)''

 * quand req reçu, doit dire de faire qqch avec la reponse. Si ne dit pas quoi faire avec la réponse, client est en attente de faire qqch.
 *
 * defini l'entete, renvoie json si api, affiche vue si mvc etc...
 */ 
app.use(homeRouter);
/**
 * routes de l'album sont dispo
 * préfixe pour les autres routes pour lisibilité.
 */
app.use('/albums', albumsRouter);

// use the 'users' as the userRouter
app.use('/users', usersRouter);

/**
 * export module : permet d'utiliser cette var dans un autre fichier
 * chaque fichier = brique à utiliser dans un autre fichier. c pk on fait le require.
 * module existe dans environnemnet JS
 * créer un module à partir cde cela et permet de faire des require dans un autre fichier.
 * Car dans node, chaque fichier est indépendt comme html et != php
 */
module.exports = app;