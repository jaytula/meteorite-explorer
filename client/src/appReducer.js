import {
  SET_LOADING,
  CLEAR_LOADING,
  SET_APP_ERROR,
  CLEAR_APP_ERROR,
} from "./actionTypes";

const appReducer = (
  state = { isLoading: false, errorMessage: null },
  action,
) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case CLEAR_LOADING:
      return { ...state, isLoading: false };
    case SET_APP_ERROR:
      return { ...state, errorMessage: action.payload.errorMessage };
    case CLEAR_APP_ERROR:
      return { ...state, errorMessage: null };
    default:
      return state;
  }
};

export default appReducer;
