import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App'
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
