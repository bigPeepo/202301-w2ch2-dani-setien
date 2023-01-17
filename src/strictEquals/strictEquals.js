export const strictEquals = ([valueA, valueB]) => {
  if (Number.isNaN(valueA) && Number.isNaN(valueB)) return false;

  if (!valueA && Object.is(valueA, -valueB)) return true;

  return Object.is(valueA, valueB);
};
