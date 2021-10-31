import Animal from "./animal";

// Animal class
// properties: name, _type, age, color, isFriendly
// methods: walk(), greet(), ageUp()

class MythicalCreature extends Animal {
	constructor(name, _type, age, color, isFriendly, walkStyle, isMagic) {
		// call the animal parent constructor, 
		// cause we still names and ages 
		super(name, _type, age, color, isFriendly);
		
		// add these attrs to the instance 
		this.walkStyle = walkStyle;
		this.hasMagicAbilities = isMagic;
		
		// this.delete('name')
	}
	
	grantWish(wish) {
		console.log(`I have granted you your wish to ${wish}`);
	}

	walk() {
		// overwriting the Animal walk func 
		console.log(`💫✨🌟 ${this.walkStyle} 💫✨🌟 `);
	}

	greet(otherBeing) {
		// call the animal instance greet function, with the same arg
		super.greet(otherBeing);
		console.log("I am very pleased to see you today!");
	}
}

window.MythicalCreature = MythicalCreature;

window.bird = new Animal('Birdie', 'bird', 1, 'blue');
// name, _type, age, color, isFriendly, walkStyle, isMagic
window.chips = new MythicalCreature("Chips", "unicorn", '', "iridescent white", true, 'fancy walk', true);

export default MythicalCreature;
