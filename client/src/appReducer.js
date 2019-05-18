import { SET_LOADING, CLEAR_LOADING } from "./actionTypes";

const appReducer = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { isLoading: true };
    case CLEAR_LOADING:
      return { isLoading: false };
    default:
      return state;
  }
};

export default appReducer;
