import mongoose from 'mongoose';
import { manufacturerSchema } from './manufacturer.js';

const carSchema = new mongoose.Schema({
	name: { type: String, minLength: 2 },
	manufacturer: { type: manufacturerSchema, required: true },
	yearManufactured: { type: Number, min: 1880 },
	engineVolume: Number,
	price: { type: Number, required: true },
	color: { type: String, required: true },
	description: String
});

const Car = mongoose.model('Car', carSchema);

export default Car;
