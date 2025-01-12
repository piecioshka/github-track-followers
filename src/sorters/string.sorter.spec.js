const { stringSorter } = require("./string.sorter");

describe("stringSorter", () => {
    it("should sorted followers properly", () => {
        const followers = [
            { login: "bbb" },
            { login: "aaa" },
            { login: "ccc" },
            { login: "ccc" },
        ];
        const getLogin = (f) => f.login;
        const sortedFollowers = stringSorter(followers, getLogin).map(getLogin);
        expect(sortedFollowers.join(",")).toEqual("aaa,bbb,ccc,ccc");
    });
});
