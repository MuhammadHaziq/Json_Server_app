import {
  FETCH_DATA,
  DATA_IS_LOADING,
  ERROR,
  DELETE_DATA,
  POST_DATA,
  FETCH_SPECIFIC_DATA
} from "./ActionType.js";
import axios from "axios";
export const FetchData = () => {
  return async dispatch => {
    try {
      dispatch({ type: DATA_IS_LOADING });
      const fetch = await axios.get("http://localhost:3005/employees");
      const fetchdata = await fetch.data;
      console.log(fetchdata);
      dispatch({ type: FETCH_DATA, payload: fetchdata });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
};
export const Insert_Data = data => {
  return async dispatch => {
    try {
      const insert = await axios.post("http://localhost:3005/employees", data);
      const fetchdata = await axios.get("http://localhost:3005/employees");
      const status = fetchdata.status;
      dispatch({ type: POST_DATA, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
};
export const Delete = id => {
  return async dispatch => {
    try {
      const Delete = await axios.delete(
        `http://localhost:3005/employees/${id}`
      );
      console.log("after delete", Delete);
      const fetchdata = await axios.get("http://localhost:3005/employees");
      const status = fetchdata.status;
      dispatch({ type: DELETE_DATA, payload: fetchdata.data, id });
      console.log("After delete", fetchdata.data);
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
};
export const FetchSpecificData = id => {
  console.log(id);
  return async dispatch => {
    try {
      const fetchdata = await axios.get(
        `http://localhost:3005/employees/${id}`
      );
      const specificdata = fetchdata.data;
      console.log(specificdata);
      dispatch({ type: FETCH_SPECIFIC_DATA, payload: specificdata });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
};
export const updateData = (data, id) => {
  return async dispatch => {
    try {
      const update = await axios.put(
        `http://localhost:3005/employees/${id}`,
        data
      );
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
    console.log(data, id);
  };
};
