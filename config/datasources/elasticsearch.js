const ENV = require('../../services/env');

module.exports = {
  nodeURL: ENV.get('ELASTICSEARCH_NODE', 'http://localhost:9200')
};
