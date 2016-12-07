import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

// Create a new express app
let app = express();

// Create a server for the app
app.server = http.createServer(app);

// Middleware
app.use(bodyParser.json({
  limit: config.bodyLimit
}));

// Passport config

// api rouates /v1
app.use('/v1', routes);

app.server.listen(config.port);
console.log(`Server listening at ${app.server.address().port}.`);

export default app;
