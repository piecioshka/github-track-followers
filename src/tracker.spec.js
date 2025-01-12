"use strict";

const { Tracker } = require("./tracker");
const nock = require("nock");

describe("Tracker", () => {
    it("should be a constructor", () => {
        expect(typeof Tracker).toEqual("function");
        expect(() => {
            return new Tracker();
        }).not.toThrow();
    });

    describe("buildURL", () => {
        it("should returns a string", () => {
            const t = new Tracker();
            const url = t.buildURL();
            expect(url).toMatch(/github\.com/);
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

            const t = new Tracker("piecioshka");
            spyOn(console, "log");
            t.fetchFollowers(() => {
                expect(t.followers).toEqual([follower1]);
                expect(console.log).toHaveBeenCalledTimes(1);
                done();
            });
        });

        it("should handle errors", (done) => {
            nock("https://fake-domain.com").get("/").reply(500, "");

            const t = new Tracker("piecioshka");
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
