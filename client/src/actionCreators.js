import axios from "axios";

import {
  SET_RESULTS,
  ADD_RESULTS,
  SET_LOADING,
  CLEAR_LOADING,
  SET_APP_ERROR,
  CLEAR_APP_ERROR,
} from "./actionTypes";
const { REACT_APP_BACKEND } = process.env;

export const setSearchResults = (text, $offset=0) => async dispatch => {
  try {
    dispatch({ type: SET_LOADING });
    const $where = text.startsWith(':') ? text.slice(1) : `lower(name) like lower('%${text}%')`;
    
    const response = await axios.get(REACT_APP_BACKEND, {
      params: {
        $where,
        $order: "name",
        $offset,
        $limit: '100',
      },
    });
    if(!$offset) {
      //const countResponse = axios.get(REACT_APP_BACKEND, { $where: `count(${$where})`});
      //console.log({countResponse});
    }
    dispatch({ type: CLEAR_LOADING });

    const { data, status, statusText } = response;
    if (status !== 200) throw new Error(statusText);
    dispatch(setErrorMessage(`Retrieved ${data.length} results`));
    dispatch({ type: $offset ? ADD_RESULTS : SET_RESULTS, payload: { term: text, results: data, end: !data.length || data.length < 100 } });
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
