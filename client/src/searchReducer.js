import { SET_RESULTS, CLEAR_RESULTS } from "./actionTypes";

const searchReducer = (state = { results: [] }, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return { term: action.payload.term, results: action.payload.results };
    case CLEAR_RESULTS:
      return { term: "", results: [] };
    default:
      return state;
  }
};

export default searchReducer;
