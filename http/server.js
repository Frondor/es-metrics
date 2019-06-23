require('dotenv').config();
const app = require('./app');
const config = require('../config');

const { port } = config.get('server');

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
