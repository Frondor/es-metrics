const express = require('express');
const app = express();
const routes = require('./routes');
const middleware = require('./middleware');

middleware.before(app);
routes(app);
middleware.after(app);

module.exports = app;
