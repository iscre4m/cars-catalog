import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true, minLength: 4 },
		password: { type: String, required: true, unique: true, minLength: 8 }
	},
	{ versionKey: false }
);

const User = mongoose.model('User', userSchema);

export default User;
