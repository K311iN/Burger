const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: 'Kb426259!',
    database: 'burgers_db'
  });
};

connection.connect();
module.exports = connection;