const es = require('../../../services/elasticsearch');
const HealthException = require('../../exceptions/HealthException');

module.exports = async (req, res) => {
  try {
    a = bbb
    res.send((await es.ping()).statusCode);
  } catch (err) {
    HealthException.throw('OMG');
  }
};
