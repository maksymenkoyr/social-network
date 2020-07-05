import {combineReducers} from 'redux'
import {initializationReducer} from './features/initialization'

const reducer = combineReducers({
    initialization: initializationReducer,
})
export default reducer
