'use strict';

class Report {
    constructor(username, followers) {
        this.username = username;
        this.followers = Report.sortFollowersByLogin(followers);
    }

    serialize() {
        return `
GitHub user "${this.username}" has followers (${this.followers.length}):\n
* ${this.followers.map((follower) => follower.login).join('\n* ')}

`;
    }

    display() {
        let results = this.serialize(this.username, this.followers);
        console.log(results);
    }

    static sortFollowersByLogin(followers) {
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
}

module.exports = Report;
