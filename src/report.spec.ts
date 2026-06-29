import { describe, it, expect, vi, beforeEach } from "vitest";

import { followersFactory } from "../mocks/followers.mock";
import { defaultFormat } from "./config";
import { Report } from "./report";
import type { Follower } from "./types";

describe("Report", () => {
    let followers: Follower[];
    let username: string;

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
        const logSpy = vi.spyOn(console, "log");
        report.render();
        expect(logSpy).toHaveBeenCalledTimes(1);
    });
});
