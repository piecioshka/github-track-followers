"use strict";

const colors = require("colors");
const request = require("superagent");

const { Report } = require("./report");
const config = require("./config");

function parseError(err, response) {
    let message = err.message;
    try {
        message = JSON.parse(response.text).message;
    } catch (_err) {}
    return message;
}

class Tracker {
    constructor({ format, username }) {
        this.page = 1;
        this.username = username;
        this.format = format;
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
                    const { format, username, followers } = this;
                    const report = new Report({
                        format,
                        username,
                        followers,
                    });
                    report.render();
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
        process.exit(1);
    }
}

module.exports = {
    Tracker,
};
