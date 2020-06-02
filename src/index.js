import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App'
import store, { subscribe } from './state'

const render = () =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.state} />
        </React.StrictMode>,
        document.getElementById('root')
        )
    }
render()
subscribe(render)