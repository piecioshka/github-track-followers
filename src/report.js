"use strict";

const serializersMap = require("./serializers/");
const { stringSorter } = require("./sorters/string.sorter");

class Report {
    constructor({ format, username, followers }) {
        this.format = format;
        this.username = username;
        this.followers = followers;
    }

    render() {
        const followers = stringSorter(this.followers, (follower) =>
            follower.login.toLowerCase()
        );
        const results = this.serialize(followers);
        console.log(results);
    }

    serialize(followers) {
        const { username } = this;
        const serializerConstructor = serializersMap[this.format];
        if (!serializerConstructor) {
            throw new Error(`Unknown serializer: ${this.format}`);
        }
        const serializer = new serializerConstructor();
        return serializer.serialize({ username, followers });
    }
}

module.exports = {
    Report,
};
