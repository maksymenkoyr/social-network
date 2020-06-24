import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import MainNav from '../MainNav/MainNav'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Messages from '../AppContent/Messenges/Messages'
import Profile from '../../containers/Profile'
import Users from '../../containers/Users'
import {authenticateUser} from '../../thunks/thunks'
import {connect} from 'react-redux'
import SignInPage from '../SignIn/SignInPage'
class App extends React.Component {
    componentDidMount() {
        this.props.authenticateUser()
    }
    render() {
        return (
            <HashRouter>
                <div className='app'>
                    <Header />
                    <MainNav />
                    <main className='app__content'>
                        <Switch>
                            <Route path='/login'>
                                <SignInPage />
                            </Route>
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

export default connect(0, {authenticateUser})(App)
