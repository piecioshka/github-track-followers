'use strict';

class Report {
    constructor(username, followers) {
        this.username = username;
        this.followers = followers;
    }

    display() {
        const followers = Report.sortFollowersByLogin(this.followers);
        const results = Report.serialize(this.username, followers);
        console.log(results);
    }

    static sortFollowersByLogin(followers) {
        return followers.sort((a, b) => {
            const loginA = a.login.toLowerCase();
            const loginB = b.login.toLowerCase();

            if (loginA > loginB) {
                return 1;
            } else if (loginA < loginB) {
                return -1;
            } else {
                return 0;
            }
        });
    }

    static serialize(username, followers) {
        return `
GitHub user "${username}" has followers (${followers.length}):\n
* ${followers.map((follower) => follower.login).join('\n* ')}

`;
    }
}

module.exports = Report;
