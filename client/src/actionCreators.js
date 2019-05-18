import axios from "axios";

import { SET_RESULTS, SET_LOADING, CLEAR_LOADING } from "./actionTypes";
const { REACT_APP_BACKEND } = process.env;

export const setSearchResults = text => async dispatch => {
  try {
    dispatch({ type: SET_LOADING });
    const response = await axios.get(REACT_APP_BACKEND, {
      params: {
        $where: `lower(name) like lower('%${text}%')`,
      },
    });
    dispatch({ type: CLEAR_LOADING });

    const { data, status, statusText } = response;
    if (status !== 200) throw new Error(statusText);
    dispatch({ type: SET_RESULTS, payload: { term: text, results: data } });
  } catch (err) {
    dispatch({ type: CLEAR_LOADING });
    console.error(err);
  }
};
