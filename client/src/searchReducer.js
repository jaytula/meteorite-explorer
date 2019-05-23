import { ADD_RESULTS, SET_RESULTS, CLEAR_RESULTS } from "./actionTypes";

const LS_KEY = "meteorite_search";

const clearedState = { term: "", results: [], end: false };
let defaultState;

try {
  const data = localStorage.getItem(LS_KEY);
  if (!data) throw new Error(`Key ${LS_KEY} not truthy`);
  defaultState = JSON.parse(data);
} catch (err) {
  defaultState = { term: "", results: [], end: false };
}

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_RESULTS:
      const newStateAdd = {
        term: action.payload.term,
        results: [...state.results, ...action.payload.results],
        end: action.payload.end
      };
      localStorage.setItem(LS_KEY, JSON.stringify(newStateAdd));
      return newStateAdd; 
    case SET_RESULTS:
      const newStateSet = {
        term: action.payload.term,
        results: action.payload.results,
        end: action.payload.end,
      };
      localStorage.setItem(LS_KEY, JSON.stringify(newStateSet));
      return newStateSet;
    case CLEAR_RESULTS:
      localStorage.setItem(LS_KEY, JSON.stringify(clearedState));
      return clearedState;
    default:
      return state;
  }
};

export default searchReducer;
