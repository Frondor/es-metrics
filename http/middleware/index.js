const express = require('express');
const errorHandler = require('./error-handler');
const notFound = require('./404');

module.exports = {
  before(app) {
    app.use(express.json());
  },

  after(app) {
    app.use(notFound);
    app.use(errorHandler);
  }
};
