const { temperatureMessage, temperatureMessageUsingTernary, ageMessage } = require("../problems/3.conditionals.js")

describe("tempeartureMessage", () => {
  test("Handles warm temperatures", () => {
    expect(temperatureMessage(60)).toBe("It's alright")
    expect(temperatureMessage(34)).toBe("It's alright")
  })
  test("Handles 32 degrees", () => {
    expect(temperatureMessage(32)).toBe("It's alright")
  })
  test("Handles freezing temperatures", () => {
    expect(temperatureMessage(31)).toBe("It's freezing!")
    expect(temperatureMessage(4)).toBe("It's freezing!")
    expect(temperatureMessage(0)).toBe("It's freezing!")
    expect(temperatureMessage(-50)).toBe("It's freezing!")
  })
})

describe("temperatureMessageUsingTernary", () => {
  test("Is written as a ternary and no if statements", () => {
    expect(temperatureMessageUsingTernary.toString().includes("?")).toBe(true);
    expect(temperatureMessageUsingTernary.toString().includes("if")).toBe(false);
  })
  test("Handles warm temperatures", () => {
    expect(temperatureMessageUsingTernary(60)).toBe("It's alright")
    expect(temperatureMessageUsingTernary(34)).toBe("It's alright")
  })
  test("Handles 32 degrees", () => {
    expect(temperatureMessageUsingTernary(32)).toBe("It's alright")
  })
  test("Handles freezing temperatures", () => {
    expect(temperatureMessageUsingTernary(31)).toBe("It's freezing!")
    expect(temperatureMessageUsingTernary(4)).toBe("It's freezing!")
    expect(temperatureMessageUsingTernary(0)).toBe("It's freezing!")
    expect(temperatureMessageUsingTernary(-50)).toBe("It's freezing!")
  })
})

describe("ageMessage", () => {
  test("senior message", () => {
    expect(ageMessage(65)).toBe("You are a senior")
    expect(ageMessage(66)).toBe("You are a senior")
    expect(ageMessage(103)).toBe("You are a senior")
  })
  test("adult message", () => {
    expect(ageMessage(64)).toBe("You are an adult")
    expect(ageMessage(18)).toBe("You are an adult")
    expect(ageMessage(54.4)).toBe("You are an adult")
  })
  test("minor message", () => {
    expect(ageMessage(17)).toBe("You are a minor")
    expect(ageMessage(2)).toBe("You are a minor")
    expect(ageMessage(5)).toBe("You are a minor")
  })
})
