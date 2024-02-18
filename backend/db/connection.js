// PG database client/connection setup
const pg = require('pg');

let dbParams = {
  host: 'localhost',
  port: '5432',
  user: 'me',
  password: '1234',
  database: 'api'
};

if (process.env.NODE_ENV === 'production') {
  dbParams = {
    connectionString: process.env.DATABASE_URL || "",
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
  };
}


const db = new pg.Client(dbParams);

db.connect();

module.exports = db;
