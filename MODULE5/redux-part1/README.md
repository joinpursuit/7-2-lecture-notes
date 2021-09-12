# Redux Light Example

For use with the intro to redux lesson.

## Installation

Clone this repo down to your local machine.

* `cd` to the directory you cloned it in.
* `npm install` to install dependencies
* `npm start` to launch the webserver

# Redux Lesson Agenda

* Gain a high level understanding of the Redux pattern

    * What is it? :
        * **Cart example:**  A bit of react state (cart) is living inside a component and being passed down (or threaded) through our other components until it reaches the components that need it.
        * So this should look pretty familiar because many of you have used a similar pattern here to manage state in some of you projects. Previously, by using our useState hook we are able to create little bits of application state in any component we choose.
        * In Redux instead of using our useState hook to create bit of state in many different components, we have a single store that lives independently of our components and acts as **A SINGLE SOURCE OF TRUTH** for our data.
        * **Breeds example:** Individual components can then read from our centralized store, interacting with only the parts of state that they need. 

    * How does it work? :
        * The way that we interact with our application state looks different in Redux. Your going to hear me use the word pattern a lot today, and that because Redux is just this idea that all of our logic that deals with interacting with our centralized state happens in a single pure function and the way we run that logic is by passing it a plain object that describes what we want to do to our state.
        * The most important thing to know about pure functions is that they do not **MUTATE** their **INPUTS**
        * So if we want to make changes to our application state, the was that we're going to to this is by **DISPATCHING** and **ACTION**. Our **ACTION** represents something the way that we want to change our state.
        * <img src="https://i1.wp.com/blogs.aca-it.be/wp-content/uploads/2019/12/Redux.png?resize=680%2C486&ssl=1"/>
        * **Banking App Analogy:** What if we wanted to transfer money between two bank accounts? We would interact with some part of our **UI**, like a buttton. Our button would create an **ACTION** that describes what we want to do to our state as well as some useful data, for example how much money we would like to be transferred. This **ACTION** would then get **DISPATCHED** or fired off. **DISPATCHING** an action is like telling our **REDUCERS** "Whoa, be alert! Something is about to happen here!" Our **REDUCERS** take in our action and our current state and decide **IF** and **HOW** our current state will change and then return our updated version of state. For example here our **REDUCER** would read our action that tells it we are making a transfer and how much, and update our state accordingly. Our updated **STATE** is the returned from our **REDUCERS** and able to be read once again by our **UI**. Our current **UI** will now reflect our updated state.

* Discuss benefits and use cases for Redux

    * So this all feels kind of complicated, and maybe its not obvious, so why would we want to go through all this trouble? :
        * **PREDICTABLE** - Because our reducers are pure functions we know that for any given input or action we will always receive the same outcome. If we call a reducer with the same state and action, it will always produce the same outcome, so if we know our current state and our action, we can predict exactly what is going to happen.
        * **EFFICIENT** - As you can imagine, using Redux can be more efficient than having to thread pieces of our state through different components. Everytime we thread our state as props through a component, we run the risk of our data becoming manipulated or corrupted in some way. Also, because we have to thread our props, in many cases our components have access to data that they don't need. In Redux, by accessing our data directly from our Redux store, we can give our components access only to the slices of state that they need, and without the worry that our data has unintentionally changed in anyway.
        * **PERSISTENT** - Redux makes persisting state very easy. Because we have our Redux store that acts as a this blueprint for all of the data in our application, as you can imagine it would be very easy to save a copy of our store either in our cookies or in local storage that way it is persisted when a user visits the page again. Imagine if you had to try and save that data from each individual components state.

* Understand the process and boilerplate involved in setting up Redux for our applications

1. ACTIONS - Functions that return objects that will tell our STORE how to update.
    * Define our ACTION types as constant variables so that we have better error handling
    * Create our ACTIONS which are functions that return an object that contains our action type

2. REDUCERS - Functions that do the heavy lifting of updating our Redux state.
    * Each reducer is concerned with a particular slice of our App state
    * Takes in our current state and our action as parameters
    * We want to be very careful not to manipulate our state in our reducer
    * Our switch statement will determine how we update this slice of our app state.

3. COMBINE REDUCERS - Once we have created our reducers, we can combine them to have one complete app state
    * It is convention to refer to this function as our rootReducer

4. PROVIDER - Provider allows us to access to or Redux store throught our App
    * We wrap our app in Provider and pass it our store allowing all child components to have access to the store.

5. HOOKS - We can use the hooks useDispatch and useSelector to interact with our Redux store once we've created it
    * useDispatch allows us to dispatch our action that will update our state
    * useSelector allows us to read parts of our state 
