const { Pool } = require('pg');
const dbParams = require('../connection.js');

const getLinkByTopic = (db, topic) => {
  return db.query(`
  SELECT *
  FROM mental_health_resources
  WHERE '${topic}' = ANY(keywords);
  `)
  .then(res => res.rows)
  .catch(err => err);
}

module.exports = getLinkByTopic;
