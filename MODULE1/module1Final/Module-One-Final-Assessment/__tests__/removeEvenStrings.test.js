const removeEvenStrings = require("../problems/removeEvenStrings.js")

describe("removeEvenStrings", () => {
  test("Removes strings with even character counts", () => {
    expect(
      removeEvenStrings(["a", "bb", "ccc", "dddd", "eeeee"])
    ).toStrictEqual(["a", "ccc", "eeeee"])
    expect(
      removeEvenStrings(["Four", "score", "and", "seven", "years", "ago"])
    ).toStrictEqual(["score", "and", "seven", "years", "ago"])
    expect(
      removeEvenStrings([
        "The",
        "only",
        "thing",
        "we",
        "have",
        "to",
        "fear",
        "is",
        "fear",
        "itself",
      ])
    ).toStrictEqual(["The", "thing"])
    expect(removeEvenStrings(["one", "two", "three", "four"])).toStrictEqual([
      "one",
      "two",
      "three",
    ])
  })

  test("Handles empty arrays", () => {
    expect(removeEvenStrings([])).toStrictEqual([])
  })

  test("Handle arrays with a single element", () => {
    expect(removeEvenStrings(["a"])).toStrictEqual(["a"])
    expect(removeEvenStrings(["to"])).toStrictEqual([])
  })
})
