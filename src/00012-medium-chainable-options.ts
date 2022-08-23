// ============= Test Cases =============
import type { Alike, Expect } from "./test-utils";

declare const a: Chainable;

const result1 = a
  .option("foo", 123)
  .option("bar", { value: "Hello World" })
  .option("name", "type-challenges")
  .get();

const result2 = a.option("name", "another name").get();

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>
];

type Expected1 = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};

type Expected2 = {
  name: string;
};

// ============= Your Code Here =============
type Chainable<C = {}> = {
  option<K extends Exclude<string | number | symbol, keyof C>, V>(
    key: K,
    value: V
  ): Chainable<C & Record<K, V>>;
  get(): C;
};
