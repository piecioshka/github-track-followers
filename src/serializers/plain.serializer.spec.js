const { followersFactory } = require("../../mocks/followers.mock");
const { PlainSerializer } = require("./plain.serializer");

describe("PlainSerializer", () => {
    let followers;
    let username;

    beforeEach(() => {
        followers = followersFactory();
        username = "test-user";
    });

    it("should serialize properly", () => {
        const serializer = new PlainSerializer();
        expect(
            serializer.serialize({ username, followers })
        ).toEqual(`GitHub user "test-user" has followers (4):

- bbb
- aaa
- ccc
- ccc`);
    });
});
