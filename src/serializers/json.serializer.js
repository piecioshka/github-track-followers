class JSONSerializer {
    serialize({ username, followers }) {
        const data = followers.map((follower) => {
            return {
                login: follower.login,
                id: follower.id,
                avatar_url: follower.avatar_url,
            };
        });
        return JSON.stringify(data, null, 2);
    }
}

module.exports = {
    JSONSerializer,
};
