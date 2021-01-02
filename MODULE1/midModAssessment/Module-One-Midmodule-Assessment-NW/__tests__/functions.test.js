const { logGreeting, greeting, incrementGlobalCount, multiply } = require("../problems/2.functions.js")
window.globalCount = 0;
describe("logGreeting", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("Logs the greeting to the console", () => {
    jest.spyOn(console, "log");
    logGreeting("Ben");
    expect(console.log).toBeCalledWith("Hello Ben!");
  });
  test("Does not return any value", () => {
    expect(logGreeting("Ben")).toBe(undefined);
  });
});

describe("greeting", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("Returns a greeting message", () => {
    expect(greeting("Ben")).toBe("Hello Ben!");
  });
  test("Does not log the greeting to the console", () => {
    jest.spyOn(console, "log");
    greeting("Ben");
    expect(console.log).not.toBeCalled();
  });
});

describe("incrementGlobalCount", () => {
  test("Increments a global variable globalCount", () => {
    incrementGlobalCount(10)
    expect(window.globalCount).toBe(10)
  })
  test("Does not return anything", () => {
    expect(incrementGlobalCount(10)).toBe(undefined)
  })
})

describe("multiply", () => {
  test("Multiplies three numbers", () => {
    expect(multiply(2,3,4)).toBe(24)
    expect(multiply(8,0,3)).toBe(0)
    expect(multiply(-1.3,-3.2,-4.5)).toBe(-18.72)
  })
  test("Ignores extra input", () => {
    expect(multiply(2,3,4,5,6,7)).toBe(24)
  })
})
