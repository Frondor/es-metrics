const Exception = require('./Exception');

/**
 * Exception for the 404 not found responses
 */
class NotFoundException extends Exception {
  /**
   * Terminate the request
   * @param {Request} req
   * @param {Response} res
   */
  respond(req, res) {
    res.status(404).send('Not found');
  }
}

module.exports = NotFoundException;
