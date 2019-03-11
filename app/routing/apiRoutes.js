var friends = require('../data/friends.js');

module.exports = function (app) {

    // API GET Requests
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    // Post user input to the server
    app.post('/api/friends', function (req, res) {

        var bestMatch = {
            name: "",
            img: "",
            friendDiff: 1000
        };

        // Parse the posted data
        var userData = req.body;
        var userScores = userData.scores;

        // This variable compares the difference
        // between the users's scores and the scores of
        // each of the "friends" stored in the server
        var totalDiff = 0;

        // Loop through the friends array
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i].name);
            totalDiff = 0;

            // Then loop through the scores of each friend
            for (var j = 0; j < friends[i].scores[j]; j++) {

                // Calculate the difference between the scores and sum them into the totalDiff
                totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // If totalDiff is less then the Diffs of the current "best match"
                if (totalDiff <= bestMatch.friendDiff) {

                    // Reset the bestMatch to be the new friend
                    bestMatch.name = friends[i].name;
                    bestMatch.img = friends[i].img;
                    bestMatch.friendDiff = totalDiff;
                }
            }
        }

        // Push the user's data to the server
        friends.push(userData);

        // Return a JSON with the user's bestMatch
        res.json(bestMatch);

    });

};
