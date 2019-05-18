import { SET_RESULTS, CLEAR_RESULTS } from "./actionTypes";

const LS_KEY = "meteorite_search";

const clearedState = { term: "", results: [] };
let defaultState;

try {
  const data = localStorage.getItem(LS_KEY);
  if (!data) throw new Error(`Key ${LS_KEY} not truthy`);
  defaultState = JSON.parse(data);
} catch (err) {
  defaultState = { term: "", results: [] };
}

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_RESULTS:
      const newState = {
        term: action.payload.term,
        results: action.payload.results,
      };
      localStorage.setItem(LS_KEY, JSON.stringify(newState));
      return newState;
    case CLEAR_RESULTS:
      localStorage.setItem(LS_KEY, JSON.stringify(clearedState));
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
