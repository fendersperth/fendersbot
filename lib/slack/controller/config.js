const path = require('path');
const createRedisStore = require('../stores/redis');

const controllerConfig = {
  debug: process.env.NODE_ENV != 'production',
  log: true
};

if (process.env.NODE_ENV === 'production') {
  controllerConfig.logLevel = 'error';
  controllerConfig.storage = createRedisStore({
    url: process.env.REDIS_URL
  });
} else {
  //jscs:disable requireCamelCaseOrUpperCaseIdentifiers
  const storePath = path.join(__dirname, '..', '..', '..', '.store');

  controllerConfig.json_file_store = storePath;
  controllerConfig.logLevel = 'debug';
};

module.exports = controllerConfig;

