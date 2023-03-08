const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors");
const routes = require('./routes/index.js');
const { errorHandler } = require('./middleware');

const urlAllowOrigin = process.env.URL_ALLOW_ORIGIN;

const server = express();
server.name = 'AidForAids';
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', urlAllowOrigin );
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

server.use(errorHandler);

module.exports = server;
