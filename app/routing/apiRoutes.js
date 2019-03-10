var friends = require('../data/friends.js');

module.exports = function (app) {

    // API GET Requests
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });


    // user submits a form and it submits data to the server.
    app.post('/api/friends', function (req, res) {

        var bestMatch = {
            name: "",
            img: "",
            friendDiff: 1000
        };

        // Here we take the result of the user"s survey POST and parse it.
        var userData = req.body;
        var userScores = userData.scores;

        // This variable compares users scores and the scores of
        // each stored "friends" in the database
        var totalDiff = 0;

        // Loop through all the friends array in the database.
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i].name);
            totalDiff = 0;

            // We then loop through all the scores of each friend
            for (var j = 0; j < friends[i].scores[j]; j++) {

                // We calculate the Diff between the scores and sum them into the totalDiff
                totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // If the sum of Diffs is less then the Diffs of the current "best match"
                if (totalDiff <= bestMatch.friendDiff) {

                    // Reset the bestMatch to be the new friend.
                    bestMatch.name = friends[i].name;
                    bestMatch.img = friends[i].img;
                    bestMatch.friendDiff = totalDiff;
                }
            }
        }

        // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
        // the database will always return that the user is the user's best friend).
        friends.push(userData);

        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
        res.json(bestMatch);

    });

};
