'use strict';

let colors = require('colors');
let request = require('superagent');
let URLParser = require('url-lib');

let Report = require('./report');

const PER_PAGE = 100;

class Tracker {
    constructor(username) {
        this.page = 1;
        this.username = username;
        this.followers = [];
    }

    buildURL() {
        let url = `https://api.github.com/users/${this.username}/followers?per_page=${PER_PAGE}&page=${this.page}`;
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
            let errMessage = JSON.parse(response.text).message;
            Tracker.displayException(errMessage);
            return;
        }

        if (Tracker.isEmptyFollowerList(response)) {
            let report = new Report(this.username, this.followers);
            report.display();
            return;
        }

        this.collectFollowers(response);
        this.tryNextPage();
    }

    fetchFollowers() {
        let url = this.buildURL(this.page, this.username);
        request.get(url).end(this.parseResponse.bind(this));
    }

    static isEmptyFollowerList(response) {
        return (response && response.body.length === 0);
    }

    static displayException(error) {
        console.error(colors.red(error));
    }
}

module.exports = Tracker;
