const { followersFactory } = require("../../mocks/followers.mock");
const { JSONSerializer } = require("./json.serializer");

describe("JSONSerializer", () => {
    let followers;
    let username;

    beforeEach(() => {
        followers = followersFactory();
        username = "test-user";
    });

    it("should serialize properly", () => {
        const serializer = new JSONSerializer();
        expect(serializer.serialize({ followers })).toEqual(`[
  { "login": "bbb" },
  { "login": "aaa" },
  { "login": "ccc" },
  { "login": "ccc" }
]`);
    });
});
