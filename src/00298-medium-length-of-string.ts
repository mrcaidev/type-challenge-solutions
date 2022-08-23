// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];

// ============= Your Code Here =============
type StringToArray<S> = S extends `${infer F}${infer R}`
  ? [F, ...StringToArray<R>]
  : [];
type LengthOfString<S extends string> = StringToArray<S>["length"];
