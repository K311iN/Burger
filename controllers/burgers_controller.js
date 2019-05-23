let express = require("express");

let router = express.Router();

let burger = require("../models/burger.js");
                                           
router.get('/', function (req, res) {
  burger.selectAll (function (data) {
    let handleBarsObject = { burgers: data };
    console.log(handleBarsObject);
    res.render("index", handleBarsObject);
  });
});

router.post('/api/new-burger', function (req, res) {
  burger.insertOne([
    'burger_name', 'devoured'
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    res.json({ id: result.insertId });
  });
});

router.put('/api/update-burger/:id', function (req, res) {
  let condition = `id = ${req.params.id}`;
  console.log('condition', condition);
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/delete-burger/:id", function (req, res) {
  let condition = `id = ${req.params.id}`;
  burger.delete(condition, function (result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;