class JSONSerializer {
    serialize({ username, followers }) {
        const data = followers
            .map(({ login }) => {
                const row = [];
                if (login) {
                    row.push(`"login": "${login}"`);
                }
                return "  { " + row.join(", ") + " }";
            })
            .join(",\n");
        return `[\n${data}\n]`;
    }
}

module.exports = {
    JSONSerializer,
};
