import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App'
<<<<<<< HEAD
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './reducers/rootReducer'
import thunk from 'redux-thunk'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {blue} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
})

let store = createStore(rootReducer, applyMiddleware(thunk))
=======
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './reducers/rootReducer'

let store = createStore(rootReducer)
console.log(store.getState())
>>>>>>> c6dc7ded801555ec9de26ef0600dc43e2b7d936d
const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <App dispatch={store.dispatch} />
                </MuiThemeProvider>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

render()
window.store = store
