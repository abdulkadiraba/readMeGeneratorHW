const axios = require("axios");

// sanity check for project file setup
const test = function () {
    console.log("Retriever here");
}

// wrapping retrieveGithubProject in a Promise layer so the caller (index.js) does not try to move to
// it's next step before retriever is done
function retrieveGithubProfile(username) {
    return new Promise(function (resolve, reject) {
        // given a github username, retrieve repo information
        const queryUrl = `https://api.github.com/users/${username}`;
        axios
            .get(queryUrl)
            .then(function (response, err) {
                if(err){
                    return reject(`An error occurred in retriever: ${err}`);
                }

                // console.log(`within retriever, response: ${JSON.stringify(response.data)}`);
                resolve(response.data);
            });
    })
}

// make these methods available
module.exports = {
    test: test,
    retrieveGithubProfile: retrieveGithubProfile
};