import { strictEquals } from "./strictEquals/strictEquals.js";
import { tests, testsExpectedResults } from "./tests/tests.js";

/* tests.map((test) => console.log(strictEquals(test))); */

console.table(
  tests.flatMap((x, i) => [
    `strictEquals returns ${strictEquals(x)}, and the expected result is ${
      testsExpectedResults[i]
    }`,
  ])
);
