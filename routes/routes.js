import { Router } from 'express';
import mongoose from 'mongoose';
import filter from '../middleware/filter.js';
import Car from '../models/car.js';
import Manufacturer from '../models/manufacturer.js';

const router = Router();
const connection = mongoose.connection;

router
	.route('/')
	.get(filter, (req, res) => res.send('all cars'))
	.post((req, res) => {
		Manufacturer.findOneAndUpdate(
			{ name: req.body.manufacturer.name },
			req.body.manufacturer,
			{
				upsert: true,
				new: true
			}
		)
			.then(result => {
				req.body.manufacturer = result;
				Car.create(req.body).then(() => {
					res.send('car was added');
				});
			})
			.catch(err => {
				console.log(`failed to insert car: ${err}`);
				res.send('error, try again later');
			});
	});

router
	.route('/:id')
	.get((req, res) => res.send(`car ${req.params.id}`))
	.put((req, res) => res.send('car was edited'))
	.delete((req, res) => res.send('car was removed'));

export default router;
