const Exception = require('./Exception');

/**
 * Exception for the /healthcheck endpoint
 */
class HealthException extends Exception {
  /**
   * Error message
   */
  get message() {
    return 'Not OK';
  }

  /**
   * @param {Request} req
   * @param {Response} res
   */
  respond(req, res) {
    res.status(500).send(this.message);
  }
}

module.exports = HealthException;
