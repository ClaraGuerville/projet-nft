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
	console.log('debugage')
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

// route login
router.get('/login', (req, res)=>{
	console.log('debugage')
	res.render('user/login');
});

router.post('/login', (req, res)=>{
	User.findOne({
		pseudo: req.body.pseudo
	}, (err, user)=>{
		if (err || !user) {
			res.redirect('/login');
			return;
		}

		bcrypt.compare(req.body.password, user.password, (err, result)=>{
			if (err || !result) {
				res.redirect('/login');
				return;
			}

			delete user.password;
			req.session.user = user;
			res.redirect('/');
		});
	});
})

module.exports = router;