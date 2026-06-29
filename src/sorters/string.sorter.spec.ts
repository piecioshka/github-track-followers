import { describe, it, expect } from "vitest";

import { followersFactory } from "../../mocks/followers.mock";
import { stringSorter } from "./string.sorter";
import type { Follower } from "../types";

describe("stringSorter", () => {
    it("should sorted followers properly", () => {
        const followers = followersFactory();
        const getLogin = (f: Follower) => f.login.toLowerCase();
        const sortedFollowers = stringSorter(followers, getLogin).map(getLogin);
        expect(sortedFollowers.join(",")).toEqual("aaa,bbb,ccc,ccc");
    });
});
