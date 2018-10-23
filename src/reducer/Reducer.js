import {
  FETCH_DATA,
  DATA_IS_LOADING,
  ERROR,
  DELETE_DATA,
  POST_DATA,
  FETCH_SPECIFIC_DATA
} from "../action/ActionType.js";
import { createBrowserHistory } from "history";
const INITIAL_STATE = {
  employees: [],
  isLoading: false,
  employee: {},
  error: null
};
const history = createBrowserHistory();
console.log(history);
const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_IS_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_DATA: {
      console.log("HEllo");
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        employees: action.payload
      };
    }
    case DELETE_DATA: {
      console.log("reducer is", action.payload);
      return {
        ...state,
        employees: action.payload
      };
    }
    case POST_DATA: {
      return {
        ...state.employees.concat([action.payload])
      };
    }
    case FETCH_SPECIFIC_DATA: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        employee: action.payload
      };
    }
    case ERROR: {
      console.log(action.payload);
      return { error: action.payload };
    }
  }
  return state;
};
export default Reducer;
