import Car from '../models/car.js';
import Manufacturer from '../models/manufacturer.js';

const filter = (req, res, next) => {
	console.log(req.query);
	const {
		manufacturer,
		yearManufactured,
		color,
		minEngineVolume,
		maxEngineVolume,
		minPrice,
		maxPrice
	} = req.query;

	if (manufacturer) {
		req.cars = req.cars.filter(
			c => c.manufacturer.name.toLowerCase() === manufacturer.toLowerCase()
		);
	}

	if (yearManufactured) {
		req.cars = req.cars.filter(
			c => c.yearManufactured === parseInt(yearManufactured)
		);
	}

	if (color) {
		req.cars = req.cars.filter(
			c => c.color.toLowerCase() === color.toLowerCase()
		);
	}

	if (minEngineVolume && maxEngineVolume) {
		req.cars = req.cars.filter(
			c =>
				c.engineVolume >= parseFloat(minEngineVolume) &&
				c.engineVolume <= parseFloat(maxEngineVolume)
		);
	}

	if (minEngineVolume) {
		req.cars = req.cars.filter(
			c => c.engineVolume >= parseFloat(minEngineVolume)
		);
	}

	if (maxEngineVolume) {
		req.cars = req.cars.filter(
			c => c.engineVolume <= parseFloat(maxEngineVolume)
		);
	}

	if (minPrice && maxPrice) {
		req.cars = req.cars.filter(
			c => c.price >= parseInt(minPrice) && c.price <= parseInt(maxPrice)
		);
	}

	if (minPrice) {
		req.cars = req.cars.filter(c => c.price >= parseInt(minPrice));
	}

	if (maxPrice) {
		req.cars = req.cars.filter(c => c.price <= parseInt(maxPrice));
	}

	next();
};

export default filter;
