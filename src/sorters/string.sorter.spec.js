const { followersFactory } = require("../../mocks/followers.mock");
const { stringSorter } = require("./string.sorter");

describe("stringSorter", () => {
    it("should sorted followers properly", () => {
        const followers = followersFactory();
        const getLogin = (f) => f.login;
        const sortedFollowers = stringSorter(followers, getLogin).map(getLogin);
        expect(sortedFollowers.join(",")).toEqual("aaa,bbb,ccc,ccc");
    });
});
