const countNumbers = require("../problems/countNumbers")

describe("countNumbers", () => {
  test("countNumbers returns an object", () => {
    expect(typeof countNumbers([5, 1, 2, 3])).toEqual("object")
    expect(typeof countNumbers([9, 9, 123745])).toEqual("object")
  })

  test("countNumbers returns an object with correct counts", () => {
    expect(countNumbers([1, 2, 3, 4, 5, 6])).toStrictEqual({
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
      6: 1,
    })
    expect(countNumbers([99, 99, 11, 12, 13, 58])).toStrictEqual({
      99: 2,
      11: 1,
      12: 1,
      13: 1,
      58: 1,
    })
    expect(countNumbers([8, -8, -8, 9, 2, 2, 2, 2, 2])).toStrictEqual({
      8: 1,
      "-8": 2,
      9: 1,
      2: 5,
    })
  })
})
