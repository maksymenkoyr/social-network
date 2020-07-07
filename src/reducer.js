import {combineReducers} from 'redux'
import {initializationReducer} from './features/initialization'
import {signInReducer} from './features/sign-in'

const reducer = combineReducers({
    initialization: initializationReducer,
    signIn: signInReducer,
})
export default reducer
