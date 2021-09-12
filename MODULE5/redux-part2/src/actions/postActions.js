import { ADD_POST, ADD_POSTS } from "./actionTypes";

export const addPost = (payload) => {
    return { type: ADD_POST, payload };
};

export const addPosts = (payload) => {
    return { type: ADD_POSTS, payload };
};


// import action types

// export and define our ADD_POST action that will take in a payload and return a POJO
// with the type of ADD_POST and the payload

// export and define our ADD_POSTS action that will take in a payload and return a POJO
// with the type of ADD_POSTS and the payload
