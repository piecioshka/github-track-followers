import { describe, it, expect, vi } from "vitest";
import nock from "nock";

import { trackOptionsFactory } from "../mocks/trackOptions.mock";
import { Tracker } from "./tracker";

describe("Tracker", () => {
    describe("buildURL", () => {
        it("should returns a URL point to github.com with username", () => {
            const opts = trackOptionsFactory({ username: "piecioshka" });
            const t = new Tracker(opts);
            const url = t.buildURL();
            expect(url).toMatch(/github\.com/);
            expect(url).toMatch(new RegExp(opts.username));
        });
    });

    describe("fetchFollowers", () => {
        it("should update followers list", () => {
            return new Promise<void>((resolve) => {
                const follower1 = {
                    login: "fake-login",
                };
                nock("https://api.github.com/")
                    .get("/users/piecioshka/followers?per_page=100&page=1")
                    .reply(200, [follower1])
                    .get("/users/piecioshka/followers?per_page=100&page=2")
                    .reply(200, []);

                const opts = trackOptionsFactory({ username: "piecioshka" });
                const t = new Tracker(opts);
                const logSpy = vi.spyOn(console, "log");
                t.fetchFollowers(() => {
                    expect(t.followers).toEqual([follower1]);
                    expect(logSpy).toHaveBeenCalledTimes(1);
                    resolve();
                });
            });
        });

        it("should handle errors", () => {
            return new Promise<void>((resolve) => {
                nock("https://fake-domain.com").get("/").reply(500, "");

                const opts = trackOptionsFactory({ username: "piecioshka" });
                const t = new Tracker(opts);
                t.buildURL = () => {
                    return "https://fake-domain.com";
                };
                const errorSpy = vi.spyOn(console, "error");
                t.fetchFollowers(() => {
                    expect(errorSpy).toHaveBeenCalledTimes(1);
                    expect(process.exit).toHaveBeenCalledWith(1);
                    resolve();
                });
            });
        });
    });
});
