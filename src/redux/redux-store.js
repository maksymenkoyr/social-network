import { createStore, combineReducers } from "redux";
import profileReducer from "../redux/profileReducer"


let store = createStore(profileReducer)

export default store