/*ROUTE ROUTE ROUTE ROUTE ROUTE ROUTE ROUTE */

//////////////
// REQUIRES //
//////////////

// (CTRL) import bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;
// get the express
const express = require('express');
// get the router
const router = express.Router();
// get the user ctrl
// const albumctrl = require('./../controllers/userctrl');

// CONTROLLERS
const userCtrl = require('./../controllers/userctrl');

router.get('/register', userCtrl.register_get);

/**
 * Get the user model
 *
 * 
 */
const User = require('./../models/user');
router.post('/register', userCtrl.register_post);

// route login
router.get('/login', userCtrl.login_get);

router.post('/login', userCtrl.login_post);

module.exports = router;