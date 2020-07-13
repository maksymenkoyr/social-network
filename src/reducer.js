import {combineReducers} from 'redux'
import {initializationReducer} from './features/initialization'
import {signInReducer} from './features/sign-in'
import {profileReducer} from './features/profile'
import {usersReducer} from './features/users'

const reducer = combineReducers({
    initialization: initializationReducer,
    signIn: signInReducer,
    profile: profileReducer,
    users: usersReducer,
})
export default reducer
