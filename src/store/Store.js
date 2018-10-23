import React, { Component } from "react";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import Reducer from "../reducer/Reducer.js";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
const reducers = combineReducers({
  // ... your other reducers here ...
  form: formReducer, // <---- Mounted at 'form'
  reducer: Reducer
});

const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;
