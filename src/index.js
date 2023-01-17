import { strictEquals } from "./strictEquals/strictEquals.js";
import { tests, testsExpectedResults } from "./tests/index.js";

/* tests.map((test) => console.log(strictEquals(test))); */

console.table(
  tests.flatMap((test, result) => [
    `strictEquals returns ${strictEquals(test)}, and the expected result is ${
      testsExpectedResults[result]
    }`,
  ])
);
