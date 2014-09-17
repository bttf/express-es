module.exports = (function() {
  var es = require('elasticsearch');
  var client = es.Client({
    host: 'localhost:9200'
  });
  return client;
})();
