require('babel-register');
require('babel-polyfill');
require('dotenv/config');
require('moment-timezone').tz.setDefault('Australia/Perth');

require('./lib/slack');
