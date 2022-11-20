import { Router } from 'express';
import { login, register } from '../controllers/user.controller.js';

const router = Router();

router.post('/register', register, (req, res) => res.send('registered'));
router.post('/login', login, (req, res) =>
	res.send({ message: 'logged in', token: req.token })
);

export default router;
