var express = require('express');
var router = express.Router();
const path = require('path');
const pathFile = path.join(__dirname, '../', '/views/home.html');

router.get('/', function(req, res, next) {
  res.sendFile(pathFile);
});

module.exports = router;
