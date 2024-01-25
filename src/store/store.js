import { combineReducers,createStore } from "redux";

import counterReducer1 from "./Reducer/counter1Reducer";
import counterReducer2 from "./Reducer/counter2Reducer";
import counterReducer3 from "./Reducer/counter3Reducer";

let store = createStore(combineReducers({counter1:counterReducer1,counter2:counterReducer2,counter3:counterReducer3}))

export default store