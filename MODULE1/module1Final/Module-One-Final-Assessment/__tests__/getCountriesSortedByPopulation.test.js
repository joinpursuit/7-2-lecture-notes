const getCountriesSortedByPopulation = require("../problems/getCountriesSortedByPopulation.js")

describe("getCountriesSortedByPopulation", () => {
  let ex1 = [
    {
      country: "Algeria",
      population: 41,
    },
    {
      country: "Belize",
      population: 0.4,
    },
    {
      country: "China",
      population: 1386,
    },
    {
      country: "Denmark",
      population: 6,
    },
  ]
  let ex2 = [
    {
      country: "Argentina",
      population: 58,
    },
    {
      country: "Egypt",
      population: 145,
    },
    {
      country: "Russia",
      population: 1386,
    },
    {
      country: "New Zealand",
      population: 66,
    },
  ]

  test("returns an array of strings", () => {
    let result = getCountriesSortedByPopulation(ex1)

    expect(result.every((v) => typeof v === "string"))
  })
  test("Returns an array of country names sorted by population", () => {
    expect(getCountriesSortedByPopulation(ex1)).toStrictEqual([
      "China",
      "Algeria",
      "Denmark",
      "Belize",
    ])
    expect(getCountriesSortedByPopulation(ex2)).toStrictEqual([
      "Russia",
      "Egypt",
      "New Zealand",
      "Argentina",
    ])
  })
})
