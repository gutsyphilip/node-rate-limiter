// @flow strict
import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import jsend from 'jsend';
import { logger } from './helpers';
import config from './config';
import { errorHandler } from './middlewares';

// Essential globals
const app = express();

//  Initialize global application middlewares
app.use(cors());
app.use(morgan('combined'));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(
  bodyParser.json({
    type: 'application/json'
  })
);
app.use(jsend.middleware);

// Initialize API routing
app.use('/', (req, res) => {
  res.send('Simple Node Starter by Philip Obosi');
});

app.listen(config.PORT, () => {
  logger.info(`Starting Watchtower on  port ${config.APP.PORT}`);
});

// // Initialize Global Error Handlers
app.use(errorHandler);
process.on('unhandledRejection', (reason, promise) => {
  throw reason;
});

process.on('uncaughtException', error => {
  logger.error(`Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`);
  // process.exit(1);
});

process.on('SIGINT', () => {
  logger.info(' Alright! Bye bye!');
  process.exit();
});
