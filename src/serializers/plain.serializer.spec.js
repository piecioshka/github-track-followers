const { PlainSerializer } = require("./plain.serializer");

describe("PlainSerializer", () => {
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
        const results = `GitHub user "test-user" has followers (4):

- bbb
- aaa
- ccc
- ccc`;

        const serializer = new PlainSerializer();
        expect(serializer.serialize({ username, followers })).toEqual(results);
    });
});
