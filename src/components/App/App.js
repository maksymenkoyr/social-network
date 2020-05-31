import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import MainNav from '../MainNav/MainNav'
import Profile from '../AppContent/Profile/Profile'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Messages from '../AppContent/Messenges/Messages'

function App() {
    return (
        <HashRouter>
            <div className='app'>
                <Header />
                <MainNav />
                <Switch>
                    <Switch>
                        <Route path='/profile'>
                            <Profile />
                        </Route>
                        <Route path='/messages'>
                            <Messages />
                        </Route>
                    </Switch>
                </Switch>
            </div>
        </HashRouter>
    )
}

export default App
