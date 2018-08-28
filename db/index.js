const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'MVP',
});

connection.connect();

module.exports = connection;