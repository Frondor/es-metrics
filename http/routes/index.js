const ping = require('./ping');
const healthcheck = require('./healthcheck');

/**
 * Track
 */
const track = require('./track');

/**
 * Resilient Async Handlers
 * @param {Function<Promise>} fn route handler or middleware
 * @return {Promise}
 */
const asyncWrap = (fn) => (...args) =>
  fn.constructor.name === 'AsyncFunction'
    ? fn(...args).catch(args[2]) // args[2]() === next()
    : fn(...args);

module.exports = (app) => {
  // Business
  app.post('/track', asyncWrap(track));

  // Status
  app.get('/ping', asyncWrap(ping));
  app.get('/healthcheck', asyncWrap(healthcheck));
};
