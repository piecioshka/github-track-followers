import type { Serializer, SerializerInput } from "../types";

export class JSONSerializer implements Serializer {
    serialize({ followers }: SerializerInput): string {
        const data = followers
            .map(({ login }) => {
                return `  { "login": "${login}" }`;
            })
            .join(",\n");
        return `[\n${data}\n]`;
    }
}
