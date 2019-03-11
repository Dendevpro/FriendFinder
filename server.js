// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// EXPRESS CONFIG
var app = express();

// Sets the port
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it
// The code below is a boilerplate
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))

// ROUTER
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});