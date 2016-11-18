'use strict';

let fs = require('fs');

function serialize(username, followers) {
    return `
# Followers of: ${username} (${followers.length})\n
* ${followers.map((follower) => follower.login).join('\n* ')}

`;
}

function buildFilename(username) {
    return `${username}-${new Date().toISOString()}.md`;
}

function saveFile([username, followers]) {
    let filename = buildFilename(username);

    return new Promise((resolve) => {
        fs.writeFile(filename, followers, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log('The file was saved!');
            resolve();
        });
    });
}

// ---

function display(username, followers) {
    followers = serialize(username, followers);
    console.log(followers);
}

function save(username, followers) {
    followers = serialize(username, followers);

    Promise.resolve()
        .then(() => [username, followers])
        .then(saveFile);
}

module.exports = {
    display,
    save
};
