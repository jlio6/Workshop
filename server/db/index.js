const mysql = require('mysql2');
const Promise = require('bluebird');

const createTables = require('./table-config');

const database = 'workshop';

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database,
  multipleStatements: true,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.getConnectionAsync()
  .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db))

module.exports = db;
