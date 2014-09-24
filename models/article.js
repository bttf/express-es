var config = require('../lib/config');
var esClient = require('../lib/esClient');
var article = {};

var index = config.article_index,
    type = config.article_type;

article.fetch = function(id) {
  return esClient.get({
    index: index,
    type: type,
    id: id
  }).then(function(body) {
    var article = {};
    article["article"] = body._source;
    article.article.id = body._id;
    return article;
  });
};

article.fetchAll = function() {
  return esClient.search({
    index: index,
    type: type,
    q: '*'
  }).then(function(body) { 
    var resp = {
      'articles': []
    };
    for (var i = 0; i < body.hits.hits.length; i++) {
      var article = body.hits.hits[i]._source;
      article.id = body.hits.hits[i]._id;
      resp.articles.push(article);
    }
    return resp;
  });
};

article.create = function(data) {
  return esClient.create({
    index: index,
    type: type,
    body: {
      title: data.title || "",
      tags: data.tags || "",
      body: data.body || "",
      url: data.url || "",
      type: data.type || "",
      createdAt: data.createdAt || (new Date()).toISOString()
    }
  });
};

article.update = function(id, data) {
  return esClient.update({
    index: index,
    type: type,
    id: id,
    body: {
      doc: data.article
    }
  });
};

article.delete = function(id) {
  return esClient.delete({
    index: index,
    type: type,
    id: id
  });
};

module.exports = article;
