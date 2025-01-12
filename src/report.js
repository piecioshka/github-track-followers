"use strict";

const serializersMap = require("./serializers/");
const { stringSorter } = require("./sorters/string.sorter");

class Report {
    constructor(type, username, followers) {
        this.type = type;
        this.username = username;
        this.followers = followers;
    }

    render() {
        const followers = stringSorter(
            this.followers,
            (follower) => follower.login
        );
        const results = this.serialize(this.username, followers);
        console.log(results);
    }

    serialize(username, followers) {
        const serializerConstructor = serializersMap[this.type];
        if (!serializerConstructor) {
            throw new Error(`Unknown serializer: ${this.type}`);
        }
        const serializer = new serializerConstructor();
        return serializer.serialize({ username, followers });
    }
}

module.exports = {
    Report,
};
