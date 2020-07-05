import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import App from './App'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'
import './index.scss'

let store = createStore(reducer, applyMiddleware(thunkMiddleware))
const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App dispatch={store.dispatch} />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

render()
window.store = store
