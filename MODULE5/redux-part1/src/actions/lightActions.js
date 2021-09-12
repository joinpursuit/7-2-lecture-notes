//we now have to import our relevant action types from our action types file ("./actionTypes")
import {TOGGLE_LIGHTS} from "./actionTypes"
// MOVE our action creator function/s for light HERE
export const lights = () => {
    return {type: TOGGLE_LIGHTS}
  };

