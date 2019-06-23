const Exception = require('../exceptions/Exception');

module.exports = (err, req, res, next) => {
  if (res.headersSent) return next(err);

  if (err instanceof Exception) return err.respond(req, res);

  res.status(500).send('Oops!');
};
