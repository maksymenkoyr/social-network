import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import profileReducer from './profileReducer'
import authenticationReducer from './authenticationReducer'
import {reducer as formReducer} from 'redux-form'

export const rootReducer = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    authentication: authenticationReducer,
    form: formReducer,
})
