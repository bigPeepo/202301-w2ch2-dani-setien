export const tests = [
  [1, 1],
  [NaN, NaN],
  [0, -0],
  [-0, 0],
  [1, "1"],
  [true, false],
  [false, false],
  ["Water", "oil"],
];

export const testsExpectedResults = [
  true,
  false,
  true,
  true,
  false,
  false,
  true,
  false,
];
