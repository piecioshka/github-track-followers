import { describe, it, expect, beforeEach } from "vitest";

import { followersFactory } from "../../mocks/followers.mock";
import { JSONSerializer } from "./json.serializer";
import type { Follower } from "../types";

describe("JSONSerializer", () => {
    let followers: Follower[];
    let username: string;

    beforeEach(() => {
        followers = followersFactory();
        username = "test-user";
    });

    it("should serialize properly", () => {
        const serializer = new JSONSerializer();
        expect(serializer.serialize({ username, followers })).toEqual(`[
  { "login": "bbb" },
  { "login": "aaa" },
  { "login": "ccc" },
  { "login": "ccc" }
]`);
    });
});
