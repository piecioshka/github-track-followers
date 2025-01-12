class JSONSerializer {
    serialize({ followers }) {
        const data = followers
            .map(({ login }) => {
                return `  { "login": "${login}" }`;
            })
            .join(",\n");
        return `[\n${data}\n]`;
    }
}

module.exports = {
    JSONSerializer,
};
