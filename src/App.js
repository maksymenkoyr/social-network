import React from 'react'
import {Switch, Route, HashRouter} from 'react-router-dom'
import HomePage from './pages/home/HomePage'

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path='/'>
                    <HomePage></HomePage>
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default App
