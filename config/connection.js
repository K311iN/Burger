const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: 'Kb426259!',
    database: 'burgers_db'
  });


connection.connect(function (err) {
  if (err)
    console.error("error connecting:" + err.stack);
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;