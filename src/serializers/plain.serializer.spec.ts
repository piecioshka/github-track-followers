import { describe, it, expect, beforeEach } from "vitest";

import { followersFactory } from "../../mocks/followers.mock";
import { PlainSerializer } from "./plain.serializer";
import type { Follower } from "../types";

describe("PlainSerializer", () => {
    let followers: Follower[];
    let username: string;

    beforeEach(() => {
        followers = followersFactory();
        username = "test-user";
    });

    it("should serialize properly", () => {
        const serializer = new PlainSerializer();
        expect(serializer.serialize({ username, followers }))
            .toEqual(`test-user's GitHub profile followers (4):

- bbb
- aaa
- ccc
- ccc`);
    });
});
