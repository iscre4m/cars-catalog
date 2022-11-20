import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/main.js';
import User from '../models/user.js';

export const register = (req, res, next) => {
	User.create({
		username: req.body.username,
		password: bcrypt.hashSync(req.body.password)
	})
		.then(() => next())
		.catch(err => {
			console.log(`failed to register: ${err}`);
			return res.status(500).send('error, try again later');
		});
};

export const login = (req, res, next) => {
	User.findOne({ username: req.body.username })
		.then(user => {
			if (!user) {
				return res.status(404).send('user not found');
			}

			const password = req.body.password;
			const hash = user.password;
			const passwordValid = bcrypt.compareSync(password, hash);

			if (!passwordValid) {
				return res.status(401).send('invalid password');
			}
			req.token = jwt.sign({ id: user.id }, config.SECRET_KEY, {
				expiresIn: 86400
			});

			next();
		})
		.catch(err => {
			console.log(`failed to log in: ${err}`);
			return res.status(500).send('error, try again later');
		});
};
