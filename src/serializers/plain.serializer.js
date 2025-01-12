class PlainSerializer {
    serialize({ username, followers }) {
        return `${username}'s GitHub profile followers (${followers.length}):\n
- ${followers.map((follower) => follower.login).join("\n- ")}`;
    }
}

module.exports = {
    PlainSerializer,
};
