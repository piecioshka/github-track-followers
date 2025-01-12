const { JSONSerializer } = require("./json.serializer");

describe("JSONSerializer", () => {
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

    it("should serialize properly", () => {
        const results = `[
  { "login": "bbb" },
  { "login": "aaa" },
  { "login": "ccc" },
  { "login": "ccc" }
]`;
        const serializer = new JSONSerializer();
        expect(serializer.serialize({ username, followers })).toEqual(results);
    });
});
