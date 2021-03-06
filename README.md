# FriendFinder
Friend Finder is a full-stack compatibility-based app that takes in results from user's survey, then compare the answers with ones stored on the database.

### Instructions
- The survey has __10__ questions with __5__ possible answers each. The answers are classified in a scale of 1 to 5 based on how much the user - agrees or disagrees with the question.

### Tools
#### Dependencies:
`express`, `body-parser` and `path`.

### Mechanics
#### User/Client side
- The user is invited to answer a multiple choice survey. Then the score is compared to other users scores and a match sets place. Based on this result the name and picture of the match user is displayed on the screen.`

#### Server side
- The app takes the users answers, saves them in an array and then compares them to scores from other previous users. The result sets up a match. The app then retrieves data (name and picture) from the server and display on the screen`

- - - 
**[Demo the APP](https://nameless-shelf-35941.herokuapp.com/)**
- - - 
## Project Built With
[HTML](https://html.com) | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | [Bootstrap](https://getbootstrap.com) | [Javascript](https://www.javascript.com/) | [Node.js](https://www.nodejs.org/) | [Express](https://expressjs.com/) | [Body-Parser](https://www.npmjs.com/package/body-parser) | [Path](https://www.npmjs.com/package/path)
