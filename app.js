const express = require("express");

// récupère le rendu de home.js
const homeRouter = require('./routes/home');

// instance 
// new : par déclaration qd plus gourment, mais sinon objet 
const app = express();

/**
 * pour utiliser un moteur de template, lui dit.
 * avec api pas besoin de faire ça car par de vue. application monolitique, si.
 * peut recevoir var indépendemment du coté serveur.
 * sécurise url. Permet de faire de l'héritage (pas ejs mais les autres oui) 
 * lister les actions, et en face, appelle ctlr.
 */
app.set('view engine', 'ejs');

/**
 * js : pour que les req soit intercepter, lui dire s c du get, post etc.
 * créer middleware pour intercepter requete
 * peut importe requete qu'on envoie (get/post), use intercepte
 *
 * middleware 'use(avec function callback)''
 */
/*
 * quand req reçu, doit dire de faire qqch avec la reponse. Si ne dit pas quoi faire avec la réponse, client est en attente de faire qqch.
 *
 * defini l'entete, renvoie json si api, affiche vue si mvc etc...
 */ 
app.use(homeRouter);

/**
 * export module : permet d'utiliser cette var dans un autre fichier
 * chaque fichier = brique à utiliser dans un autre fichier. c pk on fait le require.
 * module existe dans environnemnet JS
 * créer un module à partir cde cela et permet de faire des require dans un autre fichier.
 * Car dans node, chaque fichier est indépendt comme html et != php
 */
module.exports = app;