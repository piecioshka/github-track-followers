import type { Serializer, SerializerInput } from "../types";

export class PlainSerializer implements Serializer {
    serialize({ username, followers }: SerializerInput): string {
        return `${username}'s GitHub profile followers (${followers.length}):\n
- ${followers.map((follower) => follower.login).join("\n- ")}`;
    }
}
