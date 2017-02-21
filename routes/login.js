var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('login', { title: '登录' });
});

module.exports = router;
