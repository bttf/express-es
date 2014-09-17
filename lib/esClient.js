var config = require('./config');

var es = require('elasticsearch');
var client = es.Client({
  host: config.es_host
});

module.exports = client;
