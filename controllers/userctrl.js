// (CTRL) import bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('./../models/user');

exports.login_get = (req, res)=>{
	res.render('user/login');
}

exports.login_post = (req, res)=>{
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
}

exports.register_get = (req, res, next)=>{
	res.render('user/register');
}

exports.register_post = (req, res, next)=>{
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

}