import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './reducers/rootReducer'

let store = createStore(rootReducer)
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
// store.subscribe(render)
