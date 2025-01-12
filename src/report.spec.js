"use strict";

const { followersFactory } = require("../mocks/followers.mock");
const { Report } = require("./report");

describe("Report", () => {
    let followers;
    let username;

    beforeEach(() => {
        followers = followersFactory();
        username = "test-user";
    });

    it("should render properly", () => {
        const report = new Report({
            format: "plain",
            username,
            followers,
        });
        spyOn(console, "log");
        report.render();
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});
