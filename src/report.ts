import serializersMap from "./serializers";
import { stringSorter } from "./sorters/string.sorter";
import type { Follower } from "./types";

export interface ReportOptions {
    format: string;
    username: string;
    followers: Follower[];
}

export class Report {
    format: string;
    username: string;
    followers: Follower[];

    constructor({ format, username, followers }: ReportOptions) {
        this.format = format;
        this.username = username;
        this.followers = followers;
    }

    render(): void {
        const followers = stringSorter(this.followers, (follower) =>
            follower.login.toLowerCase()
        );
        const results = this.serialize(followers);
        console.log(results);
    }

    serialize(followers: Follower[]): string {
        const { username } = this;
        const SerializerConstructor = serializersMap[this.format];
        if (!SerializerConstructor) {
            throw new Error(`Unknown serializer: ${this.format}`);
        }
        const serializer = new SerializerConstructor();
        return serializer.serialize({ username, followers });
    }
}
