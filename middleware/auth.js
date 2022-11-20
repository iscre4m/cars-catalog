import jwt from 'jsonwebtoken';
import config from '../config/main.js';

const verifyToken = (req, res, next) => {
	const token = req.headers['authorization'].split(' ')[1];

	if (!token) {
		return res.status(403).send('no token provided');
	}

	jwt.verify(token, config.SECRET_KEY, (err, decoded) => {
		if (err) {
			return res.status(401).send('unauthorized');
		}

		req.userId = decoded.id;
		next();
	});
};

export default verifyToken;
