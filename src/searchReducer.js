import { SET_RESULTS, CLEAR_RESULTS } from "./actionTypes";

const searchReducer = (state = { results: [] }, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return { results: action.payload };
    case CLEAR_RESULTS:
      return { results: [] };
    default:
      return state;
  }
};

export default searchReducer;
