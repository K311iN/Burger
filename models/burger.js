const orm = require('../config/orm.js');

const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
 
  insertOne: function (vals, cb) {
    orm.insertOne("burgers", vals, function (res) {
      cb(res);
    });
  },
  
  updateOne: function (condition, cb) {
    orm.updateOne("burgers", condition, function (res) {
      cb(res);
    });
  },
};
  

module.exports = burger;