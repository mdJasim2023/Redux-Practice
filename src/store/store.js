import { combineReducers,createStore } from "redux";

import CounterReducer from "./Reducers/counterReducer1";

let store = createStore(combineReducers({counter1:CounterReducer}))

export default store