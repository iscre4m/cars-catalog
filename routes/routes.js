import { Router } from 'express';
import {
	editById,
	getAll,
	getById,
	insert,
	removeById
} from '../controllers/car.controller.js';
import filter from '../middleware/filter.js';

const router = Router();

router
	.route('/')
	.get(getAll, filter, (req, res) => {
		if (req.cars.length) {
			return res.json(req.cars);
		}
		res.send('no cars to get');
	})
	.post(insert, (req, res) => {
		res.send('car was added');
	});

router
	.route('/:id')
	.get(getById, (req, res) => res.send(req.car))
	.put(editById, (req, res) => res.send('car was edited'))
	.delete(removeById, (req, res) => res.send('car was removed'));

export default router;
