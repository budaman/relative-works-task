var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient


var db

MongoClient.connect('mongodb://starwars:slaptazodis@ds161032.mlab.com:61032/star-wars-quotes', (err, database) => {
   if(err) return console.log(err)
   db=database
})

router.get('/', function(req, res, next) {
  var cursor = db.collection('taskLogin').find().toArray(function(err, results) {
  res.json(results);
  })
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
