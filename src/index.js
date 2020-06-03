import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App'
import store from './redux/state'

const render = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state.getState()} />
        </React.StrictMode>,
        document.getElementById('root')
        )
    }
render(store.state)
store.state.subscribe(render)