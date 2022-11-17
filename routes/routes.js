import { Router } from 'express';
import { getAll, getById, insert } from '../controllers/car.controller.js';
import filter from '../middleware/filter.js';

const router = Router();

router
	.route('/')
	.get(getAll, filter, (req, res) => res.send(req.cars))
	.post(insert, (req, res) => {
		res.send('car was added');
	});

router
	.route('/:id')
	.get(getById, (req, res) => res.send(req.car))
	.put((req, res) => res.send('car was edited'))
	.delete((req, res) => res.send('car was removed'));

export default router;
