"use strict";

const { followersFactory } = require("../mocks/followers.mock");
const { defaultFormat } = require("./config");
const { Report } = require("./report");

describe("Report", () => {
    let followers;
    let username;

    beforeEach(() => {
        followers = followersFactory();
        username = "test-user";
    });

    it("should throw error for non-supported format", () => {
        expect(() => {
            const report = new Report({
                format: "unknown",
                username,
                followers,
            });
            report.render();
        }).toThrowError("Unknown serializer: unknown");
    });

    it("should render properly", () => {
        const report = new Report({
            format: defaultFormat,
            username,
            followers,
        });
        jest.spyOn(console, "log");
        report.render();
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});
