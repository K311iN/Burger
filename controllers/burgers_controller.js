let express = require("express");

let router = express.Router();

let burger = require("../models/burger.js");
                                           
router.get('/', function (req, res) {
  burger.selectAll (function (data) {
    let hbsObject = { burgers: data };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function (req, res) {
  burger.insertOne(req.body.burger_name), function () {
    res.redirect("/");
  };
});

router.put("/:id", function (req, res) {
  let condition = req.params.id;
  //console.log('condition', condition);
  
  burger.updateOne(condition, function() {
    res.redirect("/")
  });
});


module.exports = router;