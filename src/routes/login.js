var router = require('express').Router();

router.get('/', function(req, res) {
  console.log('loginneed password');

  res.send('login Page');
});

router.get('/register', function(req, res) {
  //{"avatar": "http://127.0.0.1:3000/api/user/avatar", "name": "诸葛大牛"} 100 success {"account": "demo", "pass": "demo"}
  res.send('register');
});


module.exports = router;
