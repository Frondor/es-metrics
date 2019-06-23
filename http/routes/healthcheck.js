const es = require('../../services/elasticsearch');

module.exports = async (req, res) => {
  try {
    res.send((await es.ping()).statusCode);
  } catch (err) {
    throw err;
  }
};
