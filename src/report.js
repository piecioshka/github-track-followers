'use strict';

function serialize(username, followers) {
    return `
# GitHub User Followers: ${username} (${followers.length})\n
* ${followers.map((follower) => follower.login).join('\n* ')}

`;
}

function display(username, followers) {
    followers = serialize(username, followers);
    console.log(followers);
}

module.exports = {
    display
};
