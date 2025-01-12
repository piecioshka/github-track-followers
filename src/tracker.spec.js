"use strict";

const { trackOptionsFactory } = require("../mocks/trackOptions.mock");
const { Tracker } = require("./tracker");
const nock = require("nock");

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
        it("should update followers list", (done) => {
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
            spyOn(console, "log");
            t.fetchFollowers(() => {
                expect(t.followers).toEqual([follower1]);
                expect(console.log).toHaveBeenCalledTimes(1);
                done();
            });
        });

        it("should handle errors", (done) => {
            nock("https://fake-domain.com").get("/").reply(500, "");

            const opts = trackOptionsFactory({ username: "piecioshka" });
            const t = new Tracker(opts);
            t.buildURL = () => {
                return "https://fake-domain.com";
            };
            spyOn(console, "error");
            t.fetchFollowers(() => {
                expect(console.error).toHaveBeenCalledTimes(1);
                done();
            });
        });
    });
});
