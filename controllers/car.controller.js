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
			Car.create(req.body).then(() => next());
		})
		.catch(err => {
			console.log(`failed to insert car: ${err}`);
			return res.status(500).send('error, try again later');
		});
};

export const getAll = (req, res, next) => {
	Car.find({}, '-_id')
		.populate('manufacturer', '-_id')
		.then(result => {
			req.cars = result;
			next();
		})
		.catch(err => {
			console.log(`failed to get cars: ${err}`);
			return res.status(500).send('error, try again later');
		});
};

export const getById = (req, res, next) => {
	const id = req.params.id;
	Car.findById(id, '-_id')
		.populate('manufacturer', '-_id')
		.then(result => {
			req.car = result;
			next();
		})
		.catch(err => {
			console.log(`failed to get car: ${err}`);
			return res.status(500).send('error, try again later');
		});
};

export const removeById = (req, res, next) => {
	const id = req.params.id;
	Car.findByIdAndDelete(id)
		.then(() => next())
		.catch(err => {
			console.log(`failed to remove car: ${err}`);
			return res.status(500).send('error, try again later');
		});
};

export const editById = (req, res, next) => {
	const id = req.params.id;
	if (req.body.manufacturer) {
		Manufacturer.findOne({ name: req.body.manufacturer.name })
			.then(result => {
				if (result) {
					req.body.manufacturer = result;
					Car.findByIdAndUpdate(id, req.body).then(() => next());
					return;
				}

				Manufacturer.create(req.body.manufacturer).then(result => {
					req.body.manufacturer = result;
					Car.findByIdAndUpdate(id, req.body).then(() => next());
				});
			})
			.catch(err => {
				console.log(`failed to edit car: ${err}`);
				return res.status(500).send('error, try again later');
			});
	}
};
