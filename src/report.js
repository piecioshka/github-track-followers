'use strict';

let fs = require('fs');

function serialize(username, followers) {
    return `
# Followers of: ${username} (${followers.length})\n
* ${followers.map((follower) => follower.login).join('\n* ')}

`;
}

function getCurrentDate() {
    let isoString = new Date().toISOString();
    isoString = isoString.replace(/\.(.*)/g, '');
    isoString = isoString.replace(/[^\d]/g, '-');
    return isoString;
}

function buildFilename(username) {
    return `${username}-${getCurrentDate()}.md`;
}

function saveFile([username, followers]) {
    let filename = buildFilename(username);

    return new Promise((resolve) => {
        fs.writeFile(filename, followers, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log(`Report is saved to file: "${filename}"`);
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
