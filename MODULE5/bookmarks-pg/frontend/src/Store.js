import {createStore} from "redux";
import rootReducer from "./Reducers";
import { devToolsEnhancer } from "redux-devtools-extension";


export default createStore(rootReducer, devToolsEnhancer());