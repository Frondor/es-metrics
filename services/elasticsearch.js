const { Client } = require('@elastic/elasticsearch');
const config = require('../config');

const ESConfig = config.get('datasources.elasticsearch');

module.exports = new Client({
  node: ESConfig.nodeURL
});
