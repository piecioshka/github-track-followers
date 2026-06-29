import { defaultFormat } from "../src/config";

export interface TrackOptions {
    format: string;
    username: string;
    followers: unknown[];
}

export function trackOptionsFactory(
    override: Partial<TrackOptions> = {}
): TrackOptions {
    return {
        format: defaultFormat,
        username: "test",
        followers: [],
        ...override,
    };
}
