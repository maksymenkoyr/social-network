import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import profileReducer from './profileReducer'
import authenticationReducer from './authenticationReducer'

export const rootReducer = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    authentication: authenticationReducer,
})
