import type { Follower } from "../src/types";

export function followersFactory(): Follower[] {
    return [
        { login: "bbb" },
        { login: "aaa" },
        { login: "ccc" },
        { login: "ccc" },
    ];
}
