// Different ways of invoking a function. 
// 1. method style        --- instance.method()
// 2. function style      --- method()
// 3. constructor style   --- new Animal()
// 4. bind-time style with call or apply --- instance.method.call(context) 

// `this` inside fn with 4 different invocation methods?
// 1. the "receiver" or the "caller"
// 		const bird = new Animal('birdie', 1, 'yellow');
// 		bird.greet(); --- METHOD stlye 
// 		in this example, `bird` is the receiver/caller
//    if we drop a console log inside the `greet` fn, 
//    we'd see `this` is the bird instance defined above
// 2. global/window/undefined
// 		when invoking an fn "function" style, the context
//    inside the function is undefined (or something you 
// 		didn't intend on using, like window or global).
// 		const bird = new Animal('birdie', 1, 'yellow');
// 		const theFn = bird.greet;
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
		this.fruits.push(fruit);
	}
}

// const listOfFruits = FruitBasket.fruits;
// console.log(listOfFruits);

// ---------- method style invocation ----------
// FruitBasket.addFruit('watermelon');
// console.log(listOfFruits);

// ------- function style invocation ----------- 
// const theFunction = FruitBasket.pickUpFruit;
// theFunction('watermelon');
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
// const veggiesBasketInstance = new VeggieBasket();
// const listOfVeggies = veggeisBasketInstance.veggies;
// console.log(listOfVeggies);

// ---------- method style invocation ----------
// veggiesBasketInstance.addVeggie('potato');
// console.log(listOfVeggies);

// ------- function style invocation ----------- 
// const theFunction = veggiesBasketInstance.addVeggie;
// theFunction('lettuce');
// console.log(listOfVeggies);

// ------- call() and apply() ------------------
// ---- before call and apply cover binding ----
// ---- bind
// const unboundFn = veggieBasket.addVeggie;
// const boundFn = veggieBasket.addVeggie.bind(veggieBasket); 
// const smallBag = { veggies: [] };
// const boundAddVegToSmallBag = unboundFn.bind(smallBag);
// boundAddVegToSmallBag('spinach');
// boundAddVegToSmallBag('tomato'); // yeah i went there 


// ---- call and apply
// const someOtherVeggieBasket = new VeggieBasket();
// veggieBasket.addVeggie.call(someOtherVeggieBasket, 'sweet potatoees');
// veggieBasket.addVeggie.apply(someOtherVeggieBasket, ['kale']);