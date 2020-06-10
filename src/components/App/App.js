import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import MainNav from '../MainNav/MainNav'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Messages from '../AppContent/Messenges/Messages'
import Profile from '../../containers/Profile'
import Users from '../../containers/Users'

function App(props) {
    return (
        <HashRouter>
            <div className='app'>
                <Header />
                <MainNav />
                <Switch>
                    <Route path='/profile/:userId?'>
                        <Profile />
                    </Route>
                    <Route path='/messages'>
                        <Messages />
                    </Route>
                    <Route path='/users'>
                        <Users />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    )
}

export default App
