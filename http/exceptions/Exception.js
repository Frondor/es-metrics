/**
 * Base exception
 * @example
 * class HttpException extends Exception {
 *  respond(req, res) {
 *    res.status(400).send()
 *  }
 * }
 * HttpException.throw('Invalid params')
 */
class Exception extends Error {
  /**
   * @param {Error} err error instance
   */
  constructor(err) {
    super(err.message);
    this.error = err;
    this.stack = err.stack;
    this.name = this.constructor.name;
  }

  /**
   * @return {String}
   */
  get message() {
    return this.err.message || 'Error';
  }

  /**
   * Response status code
   */
  get status() {
    return 500;
  }

  /**
   * Terminates the request by sending an error response
   * @param {e.Request} req
   * @param {e.Response} res
   */
  respond(req, res) {
    res.status(this.status).json({
      error: {
        name: this.name,
        message: this.message
      }
    });
  }

  /**
   * Throw a generic Error by wrapping it with the Exception
   * @param {String} message Error message
   */
  static throw(message) {
    throw new this(new Error(message));
  }

  /**
   * Throw a given Error by wrapping it with the Exception
   * @param {Error} err
   * @throws {Error}
   */
  static throwError(err) {
    throw new this(err);
  }
}

module.exports = Exception;
