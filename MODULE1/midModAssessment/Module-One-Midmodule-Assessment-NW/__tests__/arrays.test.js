const {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements,
} = require("../problems/4.arrays.js");

describe("firstAndLastAverage", () => {
  test("Averages the numbers correctly", () => {
    expect(firstAndLastAverage([1, 2, 3, 4])).toBe(2.5);
    expect(firstAndLastAverage([100, 0])).toBe(50);
  });
  test("Handles arrays with fewer than two elements", () => {
    expect(firstAndLastAverage([0])).toBe(null);
    expect(firstAndLastAverage([])).toBe(null);
  });
});

describe("duplicateArray", () => {
  test("Duplicates the values in an array", () => {
    expect(duplicateArray([1, 4, 2, 5])).toEqual([1, 4, 2, 5, 1, 4, 2, 5]);
    expect(duplicateArray([1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
  });
  test("Handles empty arrays", () => {
    expect(duplicateArray([])).toEqual([]);
  });
});

describe("removeFirstThreeElements", () => {
  test("Builds a new array with the first three values removed", () => {
    expect(removeFirstThreeElements(["a", "b", "c", "d", "e", "f"])).toEqual([
      "d",
      "e",
      "f",
    ]);
    expect(removeFirstThreeElements([1, 2, 3, 4])).toEqual([4]);
    expect(removeFirstThreeElements([true, true, true])).toEqual([]);
  });
  test("Removes all elements from arrays with fewer than three elements", () => {
    expect(removeFirstThreeElements([1, 2])).toEqual([]);
    expect(removeFirstThreeElements(["a"])).toEqual([]);
    expect(removeFirstThreeElements([])).toEqual([]);
  });
});
