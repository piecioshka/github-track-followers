module.exports = {
    perPage: 100,
    githubUrl({ username, page }) {
        return `https://api.github.com/users/${username}/followers?per_page=${this.perPage}&page=${page}`;
    },
    defaultFormat: "plain",
};
