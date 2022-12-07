type Value = string | null | undefined;
type Mapping = Record<string, unknown>;
type Argument = Value | Value[] | Mapping;
declare function cnz(...args: Argument[]): string;
export default cnz;
