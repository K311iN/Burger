let express = require("express");
let badyParser = require("body-parser");
let exphbs = require("express-handlebars");

let app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express, json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("views engine", "handlebars");

let routes = requires("./controller/burgers_controller.js");
app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http:localhost:" + PORT);
})