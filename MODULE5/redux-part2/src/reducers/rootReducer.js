import { combineReducers } from "redux";
import posts from './postsReducer';

const appState = {
    posts: posts,
    // posts: posts, same thing ^^^ 
};

const rootReducer = combineReducers(appState);

// const combineRed = (state) => {
    // const obj = {};
    // state.forEach(key => {
        // obj[key] = obj[key](key)
    // });
// }

export default rootReducer;
// import our reducers to pass to combineReducers... for now just posts


// create rootReducer using by passing an object with our posts to combineReducers 

// export rootReducer
