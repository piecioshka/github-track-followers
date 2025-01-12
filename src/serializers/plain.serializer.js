class PlainSerializer {
    serialize({ username, followers }) {
        return `GitHub user "${username}" has followers (${followers.length}):\n
- ${followers.map((follower) => follower.login).join("\n- ")}`;
    }
}

module.exports = {
    PlainSerializer,
};
