# Redux Light Example

For use with the intro to redux lesson.

## Installation

Clone this repo down to your local machine.

* `cd` to the directory you cloned it in.
* `npm install` to install dependencies
* `npm start` to launch the webserver

# Redux Lesson Agenda

* Gain a high level understanding of the Redux pattern

<img src="https://i1.wp.com/blogs.aca-it.be/wp-content/uploads/2019/12/Redux.png?resize=680%2C486&ssl=1"/>

* Discuss benefits and use cases for Redux


* Understand the process and boilerplate involved in setting up Redux for our applications

1. ACTIONS - Functions that return objects that will tell our STORE how to update.
    * Define our ACTION types as constant variables so that we have better error handling
    * Create our ACTIONS which are functions that return an object that contains our action type

2. REDUCERS - Functions that do the heavy lifting of updating our Redux state.
    * Each reducer is concerned with a particular slice of our App state
    * Takes in our current state and our action as parameters
    * We want to be very careful not to manipulate our state in our reducer
    * Our swith statement will determine how we update this slice of our app state.

3. COMBINE REDUCERS - Once we have created our reducers, we can combine them to have one complete app state
    * It is convention to refer to this function as our rootReducer

4. PROVIDER - Provider allows us to access to or Redux store throught our App
    * We wrap our app in Provider and pass it our store allowing all child components to have access to the store.

5. HOOKS - We can use the hooks useDispatch and useSelector to interact with our Redux store once we've created it
    * useDispatch allows us to dispatch our action that will update our state
    * useSelector allows us to read parts of our state 
