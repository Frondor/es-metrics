const errorHandler = require('./error-handler');

module.exports = {
  before(app) {},

  after(app) {
    app.use(errorHandler);
  }
};
