import express from 'express';
import fs from 'fs';
import https from 'https';
import config from './config/main.js';
import router from './routes/routes.js';

const app = express();

const start = () => {
	app.use(router);

	https
		.createServer(
			{
				key: fs.readFileSync(config.PATH_TO_KEY),
				cert: fs.readFileSync(config.PATH_TO_CERT)
			},
			app
		)
		.listen(config.PORT, () => console.log(`https://localhost:${config.PORT}`));
};

export default { start };
