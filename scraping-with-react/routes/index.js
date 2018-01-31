var express = require('express');
var router = express.Router();

/* Will display React application*/
router.get('/', function(req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

module.exports = router;
