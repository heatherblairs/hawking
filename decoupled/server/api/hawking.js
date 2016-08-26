var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */

router.get('/hawking', function(req, res, next){
  knex('quote').select().then(function(data){
    res.json({ data: data })
  })
})

router.get('/hawking/:id', function(req, res, next){
  knex('quote').select().where('quote.id', req.params.id).then(function(data){
    res.json({ data: data })
  })
})

router.post('/hawking', function(req, res, next){
  knex('quote').insert(req.body).then(function(){
    res.end()
  })
})

router.put('/hawking/:id', function(req, res, next){
  knex('quote').where('quote.id', req.params.id).update(req.body).then(function(){
    res.end()
  })
})

router.delete('/hawking/:id', function(req, res, next){
  knex('quote').where('quote.id', req.params.id).del().then(function(){
    res.end()
  })
})

module.exports = router;
