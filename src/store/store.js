import { combineReducers,createStore } from "redux";
import CounterReducer from "./Reducers/counterReducer1";

let store = combineReducers({counter:CounterReducer})