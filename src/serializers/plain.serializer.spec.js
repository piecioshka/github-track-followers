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
        expect(serializer.serialize({ username, followers }))
            .toEqual(`test-user's GitHub profile followers (4):

- bbb
- aaa
- ccc
- ccc`);
    });
});
