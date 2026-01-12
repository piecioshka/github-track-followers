module.exports = {
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    collectCoverageFrom: [
        "src/**/*.js",
        "mocks/**/*.js",
        "!src/**/*.spec.js",
        "!**/node_modules/**"
    ],
    coverageDirectory: "coverage",
    coverageReporters: ["text", "html"],
    testMatch: ["**/*.spec.js"]
};
