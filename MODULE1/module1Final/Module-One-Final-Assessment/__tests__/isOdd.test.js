const isOdd = require("../problems/isOdd.js")

describe("isOdd", () => {
  test("returns true on odd inputs", () => {
    expect(isOdd(1)).toBe(true)
    expect(isOdd(3)).toBe(true)
    expect(isOdd(23425)).toBe(true)
    expect(isOdd(1233467)).toBe(true)
  })

  test("returns false on even inputs", () => {
    expect(isOdd(0)).toBe(false)
    expect(isOdd(4)).toBe(false)
    expect(isOdd(1424)).toBe(false)
    expect(isOdd(4448)).toBe(false)
  })
})
