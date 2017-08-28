var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	task: "padaryti kavos",
    isDone: false,
    forWhom: 'manager'
  }, {
  	id: 2,
  	task: "paskambinti ukvedžiui",
    isDone: false,
    forWhom: 'programmer'
  }]);
});

module.exports = router;
