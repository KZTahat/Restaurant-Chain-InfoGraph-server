'use strict';

const { start } = require('./src/server');
require('dotenv').config();

start(process.env.db_port_number);