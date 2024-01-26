import { combineReducers,createStore } from "redux";
import CounterReducer from "./Reducers/counterReducer1";

let store = createStore(combineReducers({counter:CounterReducer}))

export default store