import { Router } from 'express';
import filter from '../middleware/filter.js';

const router = Router();

router
	.route('/')
	.get(filter, (req, res) => res.send('all cars'))
	.post((req, res) => res.send('car was added'));

router
	.route('/:id')
	.get((req, res) => res.send(`car ${req.params.id}`))
	.put((req, res) => res.send('car was edited'))
	.delete((req, res) => res.send('car was removed'));

export default router;
