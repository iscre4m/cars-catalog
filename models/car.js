import mongoose from 'mongoose';

const carSchema = new mongoose.Schema(
	{
		name: { type: String, minLength: 2 },
		manufacturer: {
			type: mongoose.Types.ObjectId,
			ref: 'Manufacturer',
			required: true
		},
		yearManufactured: { type: Number, min: 1880 },
		engineVolume: Number,
		price: { type: Number, required: true },
		color: { type: String, required: true },
		description: String
	},
	{ versionKey: false }
);

const Car = mongoose.model('Car', carSchema);

export default Car;
