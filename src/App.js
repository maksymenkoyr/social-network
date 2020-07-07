import React from 'react'
import {Switch, Route, HashRouter} from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import SignInPage from './pages/sign-in/SignInPage'

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route path='/sign-in'>
                    <SignInPage />
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default App
