const simpleObj = {
	a: 'the first letter',
	b: 'the second letter'
};

const computer = {
	brand: "Tandy",
	weight: 22,
	working: false,
	condition: "mint",
	price: 2894,
	powerUp() {
		return "the computer now is on";
	},
	powerDown() {
		return "the computer is now off";
	},
};

const backpack = {
  color: "green",
  contents: [
    "laptop",
    "paper",
    "phone",
    { wallet: ["money", "id", ["mastercard", "visa card", "discover card"]] },
    {
      pockets: {
        outer: ["metrocard", "tissues"],
        inner: {
          outer: "ruler",
          inner: ["dental floss", { mintFlavor: "peppermint", number: 33 }],
        },
      },
    },
  ],
  zipIt() {
    return "it is zipped";
  },
  unZipIt() {
    console.log("some items fell out");
    return {
      pickUpItems() {
        return ["lip balm", "comb", "38 cents"];
      },
    };
  },
};

const box = {
  brand: "Tandy",
  joystick: "Classic Vintage 1000",
  keyboard: "Keyfun 5000",
  working: "true",
};

module.exports = {
	simpleObj, 
	computer,
	backpack,
	box
};