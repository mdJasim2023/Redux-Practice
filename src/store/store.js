import { combineReducers,createStore } from "redux";

import TodoReducer from "./Reducers/todoReducer";

let store = createStore(combineReducers({Todolist:TodoReducer}))

export default store