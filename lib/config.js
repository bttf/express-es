/**
 * Configure your elasticsearch options here.
 */
var config = {
  
  // elasticsearch host for client to connect to
  es_host: 'localhost:9200',

  // index and type for article model to use
  article_index: 'express-es',
  article_type: 'article'

};

module.exports = config;
