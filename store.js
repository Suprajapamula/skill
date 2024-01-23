import { combineReducers, createStore } from "redux";
import counterReducer from "./Reducers/counterReducer";
import todoReducer from "./Reducers/todoReducer";
const reducer=combineReducers({c:counterReducer,t:todoReducer})
const store=new createStore(reducer);
export default store;