// reducer
import { TOGGLE_LIGHTS } from "../actions/actionTypes";
// two states: false means lights off, true means lights on
const lightReducer = (state = false, action) => {
  switch(action.type){
    case TOGGLE_LIGHTS:
      return !state
    default:
      return state
  }
};

export default lightReducer;
