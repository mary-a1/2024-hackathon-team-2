const { Pool } = require('pg');
const dbParams = require('../connection.js');

const getLinkByTopic = (db, topic) => {
  return db.query(`
  SELECT *
  FROM mental_health_resources
  WHERE array_to_string(keywords, ',') LIKE '%${topic}%';
  `)
  .then(res => res.rows)
  .catch(err => err);
}

module.exports = getLinkByTopic;
