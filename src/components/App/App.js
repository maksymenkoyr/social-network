import React, {useEffect} from 'react'
import './App.scss'
import './../../components/common/Buttons/Button.scss'
import Header from '../Header/Header'
import MainNav from '../MainNav/MainNav'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Messages from '../AppContent/Messenges/Messages'
import Profile from '../../containers/Profile'
import Users from '../../containers/Users'
import {connect} from 'react-redux'
import SignInPage from '../SignInPage/SignInPage'
import {getInitStatus} from '../../selectors/selectors'
import {initApp} from '../../thunks/thunks'

const App = ({initApp, initialized}) => {
    useEffect(() => {
        initApp()
    }, [])
    if (!initialized) {
        return null
    }
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

const mapStateToProps = state => ({
    initialized: getInitStatus(state),
})
export default connect(mapStateToProps, {initApp})(App)
