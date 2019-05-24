const connection = require('../config/connection.js');

function printQuestionMarks(num) {
  let arr = [];
  
  for (let i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
};

objToSql = function (object) {
  let arr = [];
  for (let key in object) {
    let value = object[key];
    if (Object.hasOwnProperty.call(object, key)) {
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }
      arr.push(`${key}=${value}`);
    }
  }
  return arr.toString();
};

const orm = {
  
  selectAll: function (tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  
  insertOne: function (burger_name, cb) {
    let queryString = "Insert INTO burgers (burger_name) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [burger_name], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  updateOne: function (table, condition, cb) {
    let queryString = "UPDATE " + table + " SET devoured = true WHERE id = ?";
    connection.query(queryString, [condition], function (err, res) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};
 
module.exports = orm;