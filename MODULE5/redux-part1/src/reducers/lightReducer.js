// reducer
// two states: false means lights off, true means lights on
const lightReducer = (state = false, action) => {
  console.log(state, action);
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
};

export default lightReducer;
