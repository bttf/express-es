var express = require('express');
var router = express.Router();
var article = require('../models/article');

router.get('/articles', function(req, res) {
  article.fetchAll().then(
    function (data) {
      res.json(data);
    }, 
    function (err) {
      console.log('error ' + err.message);
      res.status(500).send(err);
    });
});

router.get('/articles/:id', function(req, res) {
  article.fetch(req.params.id).then(
    function (data) {
      res.json(data);
    }, 
    function (err) {
      console.log('error ' + err.message);
      res.status(500).send(err);
    });
});

router.post('/articles', function(req, res) {
  article.create(req.body).then(
    function() { res.status(200).send('OK'); },
    function(err) { res.status(500).send(err); }
  );
});

router.put('/articles/:id', function(req, res) {
  article.update(req.params.id, req.body).then(
    function() { res.status(200).send('OK'); },
    function(err) { res.status(500).send(err); }
  );
});

router.delete('/articles/:id', function(req, res) {
  article.delete(req.params.id).then(
    function() { res.status(200).send('OK'); },
    function(err) { res.status(500).send(err); }
  );
});

module.exports = router;
