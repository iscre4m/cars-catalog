const filter = (req, res, next) => {
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
		return res.send(`all ${manufacturer} cars`);
	}

	if (yearManufactured) {
		return res.send(`all ${yearManufactured} cars`);
	}

	if (color) {
		return res.send(`all ${color} cars`);
	}

	if (minEngineVolume && maxEngineVolume) {
		return res.send(
			`all cars with engine volume from ${minEngineVolume} to ${maxEngineVolume}l`
		);
	}

	if (minEngineVolume) {
		return res.send(`all cars with engine volume from ${minEngineVolume}l`);
	}

	if (maxEngineVolume) {
		return res.send(`all cars with engine volume below ${maxEngineVolume}l`);
	}

	if (minPrice && maxPrice) {
		return res.send(`all cars from $${minPrice} to $${maxPrice}`);
	}

	if (minPrice) {
		return res.send(`all cars from $${minPrice}`);
	}

	if (maxPrice) {
		return res.send(`all cars below $${maxPrice}`);
	}

	next();
};

export default filter;
