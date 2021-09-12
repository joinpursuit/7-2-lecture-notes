// HERE we want to be able to:
    // 1. Add a post
    // 2. Add multiple posts

// import our actions from '../actions/actionTypes'


// define initial state (in this case an empty array)


// define our postsReducer function
    // 1. take in state (which will have a default value of our initial state) and action
    // 2. ensure we dont mutate our state (using Object.freeze)
    // 3. write switch statement to check case for each of our action types
        // **NOTE** We want to be sure to use functions that dont mutate our state here (i.e. push)
        // instead we're going to use our spread operator to create a new array with our data that we will return
    // 4. return default state if theres no matching action

// export our postsReducer