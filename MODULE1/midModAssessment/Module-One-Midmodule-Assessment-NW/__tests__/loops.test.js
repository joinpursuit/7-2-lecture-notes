const { evenNumbers, multiplesToOneThousand, powersOfTwo } = require("../problems/5.loops.js")

describe("evenNumbers", () => {
  test("Builds an array with even numbers from 0 to n", () => {
    expect(evenNumbers(8)).toEqual([0,2,4,6,8])
    expect(evenNumbers(22)).toEqual([0,2,4,6,8,10,12,14,16,18,20,22])
  })
  test("Builds a correct array when n is odd", () => {
    expect(evenNumbers(9)).toEqual([0,2,4,6,8])
    expect(evenNumbers(15)).toEqual([0,2,4,6,8,10,12,14])
  })
})

describe("multiplesToOneThousand", () => {
  test("Builds an array with multiples to 1000", () => {
    const inputOne = 18
    const expectedOne = [0,  18,  36,  54,  72,  90, 108, 126, 144, 162, 180, 198, 216, 234, 252, 270, 288, 306, 324, 342, 360, 378, 396, 414, 432, 450, 468, 486, 504, 522, 540, 558, 576, 594, 612, 630, 648, 666, 684, 702, 720, 738, 756, 774, 792, 810, 828, 846, 864, 882, 900, 918, 936, 954, 972, 990]
    expect(multiplesToOneThousand(inputOne)).toEqual(expectedOne)

    const inputTwo = 21
    const expectedTwo = [0,  21,  42,  63,  84, 105, 126, 147, 168, 189, 210, 231, 252, 273, 294, 315, 336, 357, 378, 399, 420, 441, 462, 483, 504, 525, 546, 567, 588, 609, 630, 651, 672, 693, 714, 735, 756, 777, 798, 819, 840, 861, 882, 903, 924, 945, 966, 987]
    expect(multiplesToOneThousand(inputTwo)).toEqual(expectedTwo)
  })
})

describe("powersOfTwo", () => {
  test("Builds an array with powers of two", () => {
    const inputOne = 6
    const expectedOne = [1,2,4,8,16,32]
    expect(powersOfTwo(inputOne)).toEqual(expectedOne)

    const inputTwo = 13
    const expectedTwo = [1, 2, 4, 8, 16, 32, 64,  128, 256, 512, 1024, 2048, 4096]
    expect(powersOfTwo(inputTwo)).toEqual(expectedTwo)
  })
})
