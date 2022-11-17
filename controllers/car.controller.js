import Car from '../models/car.js';
import Manufacturer from '../models/manufacturer.js';

export const insert = (req, res, next) => {
	Manufacturer.findOneAndUpdate(
		{ name: req.body.manufacturer.name },
		req.body.manufacturer,
		{
			upsert: true,
			new: true,
			runValidators: true
		}
	)
		.then(result => {
			req.body.manufacturer = result;
			Car.create(req.body);
		})
		.catch(err => {
			console.log(`failed to insert car: ${err}`);
			return res.status(500).send('error, try again later');
		});

	next();
};
