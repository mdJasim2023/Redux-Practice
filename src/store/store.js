import { combineReducers,createStore } from "redux";
import TeamAReducer from "./Reducers/TeamAreducer";
import TeamBReducer from "./Reducers/TeamBreducer";

let store = createStore(combineReducers({teamA:TeamAReducer,teamB:TeamBReducer}))

export default store