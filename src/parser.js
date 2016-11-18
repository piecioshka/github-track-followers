'use strict';

function getFollowerCredentials(follower, ...names) {
    let credentials = {};
    names.forEach((name) => {
        credentials[name] = follower[name];
    });
    return credentials;
}

function sortFollowersByLogin(followers) {
    return followers.sort((a, b) => {
        let loginA = a.login.toLowerCase();
        let loginB = b.login.toLowerCase();

        if (loginA > loginB) {
            return 1;
        } else if (loginA < loginB) {
            return -1;
        } else {
            return 0;
        }
    });
}

function parseFollowerNames(followers, ...names) {
    return followers.map((follower) => {
        return getFollowerCredentials(follower, ...names);
    });
}

module.exports = {
    parseFollowerNames,
    sortFollowersByLogin
};
