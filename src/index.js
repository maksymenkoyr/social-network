import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App'
import {createStore} from 'redux'
import profileReducer from './reducers/profileReducer'
import {Provider} from 'react-redux'

let store = createStore(profileReducer)
console.log(store.getState())
const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
