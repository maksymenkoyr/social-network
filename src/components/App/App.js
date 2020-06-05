import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import MainNav from '../MainNav/MainNav'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Messages from '../AppContent/Messenges/Messages'
import Profile from '../../containers/Profile'

function App(props) {
    return (
        <HashRouter>
            <div className='app'>
                <Header />
                <MainNav />
                <Switch>
                    <Route path='/profile'>
                        <Profile/>
                    </Route>
                    <Route path='/messages'>
                        <Messages />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    )
}

export default App
