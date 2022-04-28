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

router.get('/register', (req, res, next)=>{
	res.render('user/register');
});

/**
 * Get the user model
 *
 * 
 */
const User = require('./../models/user');
router.post('/register', (req, res, next)=>{
	// 
    bcrypt.hash(req.body.password, saltRounds, (err, hash)=>{
		// retrieve the field's values & use it to instantiate a new User. Spread operator : does not take the 'repeat'
		const user = new User({
			...req.body,
			password: hash
		});

		user.save((err, result)=>{
			if (err)
				console.log(err);
			else
				console.log(result);
				res.redirect('/');
		})
    });

})

module.exports = router;