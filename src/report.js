'use strict';

let fs = require('fs');
let mkdirp = require('mkdirp');
let path = require('path');
let displayException = require('./exception').displayException;

const REPORTS_DIRECTORY = path.join(__dirname, '..', 'reports');

function serialize(username, followers) {
    return `
# Report for user: ${username} (${followers.length})
* ${followers.map((follower) => follower.login).join('\n* ')}

`;
}

function buildFilename(username) {
    return `${REPORTS_DIRECTORY}/${username}-${new Date().toISOString()}.md`;
}

function createDirectory() {
    return new Promise((resolve) => {
        mkdirp(REPORTS_DIRECTORY, function (err) {
            if (err) {
                displayException(err);
                return;
            }
            resolve();
        });
    });
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
        .then(createDirectory)
        .then(() => [username, followers])
        .then(saveFile);
}

module.exports = {
    display,
    save
};
