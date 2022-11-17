import { Router } from 'express';
import mongoose from 'mongoose';
import { insert } from '../controllers/car.controller.js';
import filter from '../middleware/filter.js';

const router = Router();
const connection = mongoose.connection;

router
	.route('/')
	.get(filter, (req, res) => res.send('all cars'))
	.post(insert, (req, res) => {
		res.send('car was added');
	});

router
	.route('/:id')
	.get((req, res) => res.send(`car ${req.params.id}`))
	.put((req, res) => res.send('car was edited'))
	.delete((req, res) => res.send('car was removed'));

export default router;
