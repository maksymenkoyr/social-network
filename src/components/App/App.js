import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import MainNav from '../MainNav/MainNav'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Messages from '../AppContent/Messenges/Messages'
import Profile from '../../containers/Profile'
import Users from '../../containers/Users'
import {REQUEST, API_KEY} from '../../constants/serverAPI'
import * as axios from 'axios'
import {authenticateUser} from '../../thunks/thunks'
class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(authenticateUser())
    }
    render() {
        return (
            <HashRouter>
                <div className='app'>
                    <Header />
                    <MainNav />
                    <main className='app__content'>
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
                    </main>
                </div>
            </HashRouter>
        )
    }
}

export default App
