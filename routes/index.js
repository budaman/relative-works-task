var express = require('express');
var router = express.Router();

var db

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://starwars:slaptazodis@ds161032.mlab.com:61032/star-wars-quotes', (err, database) => {
   if(err) return console.log(err)
   db=database
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/createTask', (req, res) => {
  db.collection('taskList').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

router.delete('/taskList', (req, res) => {
  obj = {"id"
:
req.body.id}
  console.log(obj)
  db.collection('taskList').findOneAndDelete(obj,
  (err, result) => {
    if (err) return res.send(500, err)
    res.send({message: 'coord was deleted'})
  })
})

router.put('/taskList', (req, res) => {
  db.collection('taskList')
  .findOneAndUpdate({id: req.body.oldId}, {
    $set: {
      task: req.body.task,
      forWhom: req.body.forWhom,
      title: req.body.title,
      id: req.body.id
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

router.put('/isDone', (req, res) => {
  db.collection('taskList')
  .findOneAndUpdate({id: req.body.id}, {
    $set: {
      isDone: req.body.isDone
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

module.exports = router;
