type Value = string | false | null | undefined;
type Mapping = Record<string, unknown>;
type Argument = Value | Value[] | Mapping;

export default function cnz(...args: Argument[]): string;
