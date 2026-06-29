import * as colors from "colors/safe";
import request from "superagent";

import { Report } from "./report";
import { githubUrl } from "./config";
import type { Follower } from "./types";

export interface TrackerOptions {
    format: string;
    username: string;
}

function parseError(err: Error, response?: request.Response): string {
    let message = err.message;
    try {
        message = JSON.parse(response?.text ?? "").message;
    } catch (_err) {}
    return message;
}

export class Tracker {
    page: number;
    username: string;
    format: string;
    followers: Follower[];

    constructor({ format, username }: TrackerOptions) {
        this.page = 1;
        this.username = username;
        this.format = format;
        this.followers = [];
    }

    buildURL(): string {
        return githubUrl({
            username: this.username,
            page: this.page,
        });
    }

    _tryNextPage(cb?: () => void): void {
        this.page++;
        this.fetchFollowers(cb);
    }

    _collectFollowers(response: request.Response): void {
        this.followers.push(...response.body);
    }

    fetchFollowers(cb?: () => void): void {
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

    static isEmptyFollowerList(response: request.Response): boolean {
        return Boolean(response) && response.body.length === 0;
    }

    static displayException(error: string): void {
        console.error(colors.red(error));
        process.exit(1);
    }
}
