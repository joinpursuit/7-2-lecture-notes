const removeVowels = require("../problems/removeVowels.js")

describe("removeVowels", () => {
  test('removes vowels from an input string', () => {
    expect(removeVowels("hello")).toBe("hll")
    expect(removeVowels("What's up?")).toBe("Wht's p?")
    expect(removeVowels("aeaeae")).toBe("")
  })

  test("does not remove y from an input string", () => {
    expect(removeVowels("y doesn't count")).toBe("y dsn't cnt")
  })

  test("does remove capital letters from an input string", () => {
    expect(removeVowels("CAPITAL LETTERS DO COUNT")).toBe("CPTL LTTRS D CNT")
  })

})