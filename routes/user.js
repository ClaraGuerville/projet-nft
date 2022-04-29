//////////////////////
// ROUTE'S REQUIRES //
//////////////////////

// (CTRL) import bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;
// get the router
const express = require('express');
const router = express.Router();
// get the user's ctrl
// const albumctrl = require('./../controllers/userctrl');

/////////////
// REQUEST //
/////////////

// render the register page
router.get('/register', (req, res, next)=>{
	res.render('user/register');
});

// Get the user model
const User = require('./../models/user');

// register a user
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
		});
    });
});

// render the login page
router.get('/login', (req, res)=>{
	res.render('user/login');
});

// login a user
router.post('/login', (req, res)=>{
	User.findOne({
		pseudo: req.body.pseudo
	}, (err, user)=>{
		// error's treatment 
		if (err || !user) {
			res.redirect('/login');
			return;
		}

		// if the passwords correspond, open a session
		bcrypt.compare(req.body.password, user.password, (err, result)=>{
			// error's treatment
			if (err || !result) {
				res.redirect('/login');
				return;
			}

			// store the user into a session
			delete user.password;
			req.session.user = user;
			res.redirect('/');
		});
	});
});

////////////
// EXPORT //
////////////
module.exports = router;