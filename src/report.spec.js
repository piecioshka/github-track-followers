"use strict";

const { Report } = require("./report");

describe("Report", () => {
    let followers;
    let username;

    beforeEach(() => {
        followers = [
            { login: "bbb" },
            { login: "aaa" },
            { login: "ccc" },
            { login: "ccc" },
        ];
        username = "test-user";
    });

    it("should be a constructor", () => {
        expect(typeof Report).toEqual("function");
        expect(() => {
            return new Report();
        }).not.toThrow();
    });

    it("should display properly", () => {
        const report = new Report("plain", username, followers);
        spyOn(console, "log");
        report.render();
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});
