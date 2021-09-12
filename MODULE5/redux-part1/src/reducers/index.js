import { combineReducers } from "redux"
import lightReducer from "./lightReducer"


// create our rootReducer by passing an object with each slice of our state within it to combineReducers
const rootReducer = combineReducers({lights:lightReducer})
//export our rootReducer
export default rootReducer;