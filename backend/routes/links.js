var express = require('express');
var router = express.Router();

/* GET links listing. */

router.get('/', function(req, res, next) {
  res.json({links: [
    {id: 1, url: "http://www.google.com"},
    {id: 2, url: "http://www.yahoo.com"},
  ]});
}
);

module.exports = router;