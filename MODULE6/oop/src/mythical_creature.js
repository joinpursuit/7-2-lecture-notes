import Animal from "./animal";

// Animal class
// properties: name, _type, age, color, isFriendly
// methods: walk(), greet(), ageUp()

class MythicalCreature extends Animal {
	grantWish(wish) {
		console.log(`I have granted you your wish to ${wish}`);
	}

	walk() {
		console.log(`💫✨🌟 ${this.walkStyle} 💫✨🌟 `);
	}

	greet(otherBeing) {
		super.greet(otherBeing);
		console.log("I am very pleased to see you today!");
	}
}

window.chips = new MythicalCreature("Chips", "unicorn", "iridescent white");
window.bird = new Animal('Birdie', 'bird', 1, 'blue');

export default MythicalCreature;
