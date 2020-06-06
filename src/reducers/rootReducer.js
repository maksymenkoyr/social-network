import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";

export const rootReducer = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer 
})