import mongoose from 'mongoose';

const manufacturerSchema = new mongoose.Schema(
	{
		name: { type: String, unique: true, required: true, minLength: 2 }
	},
	{ versionKey: false }
);

const Manufacturer = mongoose.model('Manufacturer', manufacturerSchema);

export default Manufacturer;
