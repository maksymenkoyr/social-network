import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import profileReducer from './profileReducer'
import authenticationReducer from './authenticationReducer'
import globalReducer from './globalReducer'

export const rootReducer = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    authentication: authenticationReducer,
    global: globalReducer,
})
