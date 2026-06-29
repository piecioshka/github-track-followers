import type { SerializerConstructor } from "../types";
import { PlainSerializer } from "./plain.serializer";
import { JSONSerializer } from "./json.serializer";

const serializersMap: Record<string, SerializerConstructor> = {
    plain: PlainSerializer,
    json: JSONSerializer,
};

export default serializersMap;
