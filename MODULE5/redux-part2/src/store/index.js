// First let's create our store here... to do this we need to create our rootReducer
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import rootReducer from "../reducers/rootReducer";

const store = createStore(rootReducer, devToolsEnhancer());

//create our store const by passing our createStore function our rootReducer and devToolsEnhancer 
// **NOTE** devToolsEnhancer is a function so we need to invoke it
// At some point it may be useful for you to pass middlewares to your createStore function rather than or in addition to 
// an enhancer, however, this is out of the scope for todays lecture....


export default store;