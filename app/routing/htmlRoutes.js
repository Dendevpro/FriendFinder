// DEPENDENCIES
var path = require('path');

// ROUTING
module.exports = function (app) {

    // If the route is '.../survey' renders page survey.html
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    // If no matching route is found default to home
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};