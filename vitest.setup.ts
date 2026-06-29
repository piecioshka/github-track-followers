import { beforeEach, vi } from "vitest";

// Mock process.exit globally to prevent it from actually exiting during tests.
const processExitSpy = vi.spyOn(process, "exit").mockImplementation(() => {
    return undefined;
});

// Reset the mock before each test so spies in tests work correctly.
beforeEach(() => {
    processExitSpy.mockClear();
});
