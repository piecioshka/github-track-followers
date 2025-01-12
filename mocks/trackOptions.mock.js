const { defaultFormat } = require("../src/config");

module.exports = {
    trackOptionsFactory: (override) => ({
        format: defaultFormat,
        username: "test",
        followers: [],
        ...override,
    }),
};
