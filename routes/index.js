var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => res.render('index', { title: '逐梦科技' }));

module.exports = router;
