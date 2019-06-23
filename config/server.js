const ENV = require('../services/env');

/**
 * Config variables used by Express
 */
module.exports = {
  host: ENV.get('SERVER_HOST', '0.0.0.0'),
  port: ENV.get('SERVER_PORT', 3000),
};
