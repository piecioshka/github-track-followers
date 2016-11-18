'use strict';

let request = require('superagent');
let URLParser = require('url-lib');

let Parser = require('./parser');
let Reporter = require('./report');
let displayException = require('./exception').displayException;

const PER_PAGE = 100;

class Track {
    constructor(username, action) {
        this.page = 1;
        this.username = username;
        this.action = action;
        this.followers = [];
    }

    buildURL() {
        let url = `https://api.github.com/users/${this.username}/followers?per_page=${PER_PAGE}&page=${this.page}`;
        return URLParser.formatUrl(url, { page: this.page });
    }

    static isEmptyFollowerList(response) {
        return (response && response.body.length === 0);
    }

    tryNextPage() {
        this.page++;
        this.makeRequest();
    }

    collectFollowers(response) {
        this.followers.push(...Parser.parseFollowerNames(response.body, 'login'));
    }

    parseResponse(err, response) {
        if (err) {
            let errMessage = JSON.parse(response.text).message;
            displayException(errMessage);
            return;
        }

        if (Track.isEmptyFollowerList(response)) {
            let report = Parser.sortFollowersByLogin(this.followers);
            Reporter[this.action](this.username, report);
            return;
        }

        this.collectFollowers(response);
        this.tryNextPage();
    }

    makeRequest() {
        let url = this.buildURL(this.page, this.username);
        request.get(url).end(this.parseResponse.bind(this));
    }
}

module.exports = Track;
