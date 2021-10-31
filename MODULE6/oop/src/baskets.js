// Different ways of invoking a function. 
// 1. method style        --- instance.method()
// 2. function style      --- method()
// 3. constructor style   --- new Animal()
// 4. bind-time style with call() or apply() --- instance.method.call(context) 

// `this` inside fn with 4 different invocation methods?
// 1. the "receiver" or the "caller"
// 		const bird = new Animal('birdie', 1, 'yellow');
// 		bird.greet(); --- METHOD stlye 
// 		in this example, `bird` is the receiver/caller
//    if we drop a console log inside the `greet` fn, 
//    we'd see `this` is the bird instance defined above
// 2. global/window/undefined
// 		when invoking an fn "function" style, the context
//    	inside the function is undefined (or something you 
// 		didn't intend on using, like window or global).
// 	  const bird = new Animal('birdie', 1, 'yellow');
// 	  const theFn = bird.greet;
//    theFn(); ---- FUNCTION style
// 3. the instance being created
// 		const bird = new Animal(); ---- CONSTRUCTOR style 
// 4. the first argument to `call` or `apply`
// 		const bird = new Animal(); ---- CONSTRUCTOR style 
//		bird.greet.call(bird);
//		bird.greet.apply(bird);


// with POJO
const FruitBasket = {
	fruits: ['orange', 'orange', 'orange', 'banana', 'banana', 'apple'],
	addFruit(fruit) {
		console.log(this);
		this.fruits.push(fruit);
	}
}

// const listOfFruits = FruitBasket.fruits;
// console.log(listOfFruits);

// ---------- method style invocation ----------
// FruitBasket.addFruit('watermelon');
// console.log(listOfFruits);

// ------- function style invocation ----------- 
// const theFunction = FruitBasket.addFruit;
// theFunction('melon');
// console.log(listOfFruits);




class VeggieBasket {
	constructor() {
		this.veggies = ['zucchini', 'pepper', 'carrot', 'celery'];
	}

	addVeggie(veggie) {
		this.veggies.push(veggie);
	}
}

// ----- contructor style invocation -----------
const veggiesBasketInstance = new VeggieBasket();
const listOfVeggies = veggiesBasketInstance.veggies;
// console.log(listOfVeggies);

// ---------- method style invocation ----------
// veggiesBasketInstance.addVeggie('potato');
// console.log(listOfVeggies);

// ------- function style invocation ----------- 
// const theFunction = veggiesBasketInstance.addVeggie;
// theFunction('lettuce'); // LOST CONTEXT
// console.log(listOfVeggies);

// ------- call() and apply() ------------------
// ---- before call and apply cover binding ----
// ---- bind
const unboundFn = veggiesBasketInstance.addVeggie; // NOT INVOKING
const boundFn = unboundFn.bind(veggiesBasketInstance); 
boundFn('banana'); // function style ... but now we have ctx 

const smallBag = { veggies: ['CANDY'] };
const boundAddVegToSmallBag = unboundFn.bind(smallBag);
// 
boundAddVegToSmallBag('spinach');
boundAddVegToSmallBag('tomato');
console.log(smallBag);


// ---- call and apply
const someOtherVeggieBasket = new VeggieBasket();
const theFn = veggiesBasketInstance.addVeggie;

// the next three lines do the same thing.
theFn.call(someOtherVeggieBasket, 'sweet potatoes');
theFn.apply(someOtherVeggieBasket, ['salt potatoes']); // apply - array 
theFn.bind(someOtherVeggieBasket)('sugar potatoes'); // call - comma


const theNewFn = someOtherVeggieBasket.addVeggie;
const blueberryAdditionFn = theNewFn.bind(someOtherVeggieBasket);
blueberryAdditionFn('blueberries');

console.log(someOtherVeggieBasket)