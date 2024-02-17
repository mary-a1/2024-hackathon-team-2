var express = require('express');
var router = express.Router();
const getLinkByTopic = require('../db/queries/linksQueries');
const db = require('../db/connection.js');

/* GET links listing. */
module.exports = db => {
  router.get('/', function(req, res, next) {
    console.log("get request to /links");
    getLinkByTopic(db, 'depression')
    .then(links => {
      console.log("links retrieved", links);
      res.json({links});
    })
    .catch(err => {
      res.json({error: err.message || err.toString()});
    });
  })
  return router;
}



