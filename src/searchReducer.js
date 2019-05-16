import { SET_RESULTS, CLEAR_RESULTS } from "./actionTypes";

const searchReducer = (state = { results: [] }, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return state;
    case CLEAR_RESULTS:
      return state;
    default:
      return state;
  }
};

export default searchReducer;
