'use strict';

const colors = require('colors');
const request = require('superagent');
const URLParser = require('url-lib');

const Report = require('./report');

const PER_PAGE = 100;

class Tracker {
    constructor(username) {
        this.page = 1;
        this.username = username;
        this.followers = [];
    }

    buildURL() {
        const url = `https://api.github.com/users/${this.username}/followers?per_page=${PER_PAGE}&page=${this.page}`;
        return URLParser.formatUrl(url, { page: this.page });
    }

    tryNextPage() {
        this.page++;
        this.fetchFollowers();
    }

    collectFollowers(response) {
        this.followers.push(...response.body);
    }

    parseResponse(err, response) {
        if (err) {
            const errMessage = JSON.parse(response.text).message;
            Tracker.displayException(errMessage);
            return;
        }

        if (Tracker.isEmptyFollowerList(response)) {
            const report = new Report(this.username, this.followers);
            report.display();
            return;
        }

        this.collectFollowers(response);
        this.tryNextPage();
    }

    fetchFollowers() {
        const url = this.buildURL();
        request
            .get(url)
            .set('User-Agent', 'Terminal')
            .end(this.parseResponse.bind(this));
    }

    static isEmptyFollowerList(response) {
        return (response && response.body.length === 0);
    }

    static displayException(error) {
        console.error(colors.red(error));
    }
}

module.exports = Tracker;
