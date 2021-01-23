const secondSmallest = require("../problems/smallest.js");

describe("secondSmallest", () => {
  test("Returns a number", () => {
    expect(typeof secondSmallest([5, 1, 4, 5, 3])).toBe("number");
  });
  test("Returns the second smallest number", () => {
    expect(secondSmallest([5, 1, 4, 2, 5, 6])).toBe(2);
    expect(secondSmallest([1, 10, 7, 90, 5, 4])).toBe(4);
    expect(secondSmallest([2, 1, 4, 90, 5, 6])).toBe(2);
    expect(secondSmallest([1, 3, 4, 90, 5, 6])).toBe(3);
  });
});
