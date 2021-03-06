import axios from "axios";

import {
  SET_RESULTS,
  SET_RESULTS_COUNT,
  ADD_RESULTS,

  SET_LOADING,
  CLEAR_LOADING,
  SET_APP_ERROR,
  CLEAR_APP_ERROR,
} from "./actionTypes";
const { REACT_APP_BACKEND } = process.env;
const FETCH_AMOUNT = 500;

export const setSearchResults = (text, $offset = 0) => async dispatch => {
  try {
    dispatch({ type: SET_LOADING });
    const $where = text.startsWith(':') ? text.slice(1) : `lower(name) like lower('%${text.trim()}%')`;

    const response = await axios.get(REACT_APP_BACKEND, {
      params: {
        $where,
        $order: "name",
        $offset,
        $limit: FETCH_AMOUNT,
      },
    });
    if (!$offset) {
      const countResponse = await axios.get(REACT_APP_BACKEND, { params: { $select: 'count(*)', $where } });
      const count = countResponse.data[0].count;
      dispatch({ type: SET_RESULTS_COUNT, count })
    }
    dispatch({ type: CLEAR_LOADING });

    const { data, status, statusText } = response;
    if (status !== 200) throw new Error(statusText);
    dispatch(setErrorMessage(`Retrieved ${data.length} results`));
    dispatch({ type: $offset ? ADD_RESULTS : SET_RESULTS, payload: { term: text, results: data, end: !data.length || data.length < FETCH_AMOUNT } });
  } catch (err) {
    dispatch({ type: CLEAR_LOADING });
    dispatch(setErrorMessage(err.message));
  }
};

export const setErrorMessage = errorMessage => ({
  type: SET_APP_ERROR,
  payload: { errorMessage },
});

export const clearErrorMessage = () => ({
  type: CLEAR_APP_ERROR,
});
