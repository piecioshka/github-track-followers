export interface Follower {
    login: string;
}

export interface SerializerInput {
    username: string;
    followers: Follower[];
}

export interface Serializer {
    serialize(input: SerializerInput): string;
}

export type SerializerConstructor = new () => Serializer;
