"use strict";

const colors = require("colors");
const request = require("superagent");

const Report = require("./report");
const config = require("./config");

function parseError(err, response) {
    let message = err.message;
    try {
        message = JSON.parse(response.text).message;
    } catch (_err) {}
    return message;
}

class Tracker {
    constructor(username) {
        this.page = 1;
        this.username = username;
        this.followers = [];
    }

    buildURL() {
        return config.githubUrl({
            username: this.username,
            page: this.page,
        });
    }

    _tryNextPage(cb) {
        this.page++;
        this.fetchFollowers(cb);
    }

    _collectFollowers(response) {
        this.followers.push(...response.body);
    }

    fetchFollowers(cb) {
        const url = this.buildURL();
        request
            .get(url)
            .set("User-Agent", "Terminal")
            .end((err, response) => {
                if (err) {
                    const errMessage = parseError(err, response);
                    Tracker.displayException(errMessage);
                    cb && cb();
                    return;
                }

                if (Tracker.isEmptyFollowerList(response)) {
                    const report = new Report(this.username, this.followers);
                    report.display();
                    cb && cb();
                    return;
                }

                this._collectFollowers(response);
                this._tryNextPage(cb);
            });
    }

    static isEmptyFollowerList(response) {
        return response && response.body.length === 0;
    }

    static displayException(error) {
        console.error(colors.red(error));
    }
}

module.exports = Tracker;
