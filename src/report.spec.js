"use strict";

const Report = require("./report");

describe("Report", () => {
    let followers;
    let username;

    it("should be a constructor", () => {
        expect(typeof Report).toEqual("function");
        expect(() => {
            return new Report();
        }).not.toThrow();
    });

    beforeEach(() => {
        followers = [{ login: "bbb" }, { login: "aaa" }, { login: "ccc" }, { login: "ccc" }];
        username = "test-user";
    });

    it("should serialize properly", () => {
        const results = `GitHub user "test-user" has followers (4):

* bbb
* aaa
* ccc
* ccc`;

        expect(Report.serialize(username, followers)).toEqual(results);
    });

    it("should display properly", () => {
        const r = new Report(username, followers);
        spyOn(console, "log");
        r.display();
        expect(console.log).toHaveBeenCalledTimes(1);
    });

    it("should sorted followers properly", () => {
        const sortedFollowers = Report.sortFollowersByLogin(followers).map(
            (follower) => follower.login
        );
        expect(sortedFollowers.join(",")).toEqual("aaa,bbb,ccc,ccc");
    });
});
