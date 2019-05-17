import axios from "axios";

import { SET_RESULTS } from "./actionTypes";
const { BACKEND_ENDPOINT } = process.env;

export const setSearchResults = text => async dispatch => {
  try {
    const response = await axios.get(BACKEND_ENDPOINT, {
      params: {
        $where: `lower(name) like lower('%${text}%')`,
      },
    });

    const { data, status, statusText } = response;
    if (status !== 200) throw new Error(statusText);
    dispatch({ type: SET_RESULTS, payload: data });
  } catch (err) {
    console.error(err);
  }
};
