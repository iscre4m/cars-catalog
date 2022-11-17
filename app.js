import mongoose from 'mongoose';
import config from './config/main.js';
import server from './server.js';

mongoose
	.connect(config.CONNECTION_STRING)
	.then(() => {
		server.start();
	})
	.catch(err => console.log(`failed to connect: ${err}`));
