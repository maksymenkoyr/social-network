import React from 'react'
import './Header.scss'
import Logo from '../common/Logo/Logo'
import SignIn from './SignIn'
import {connect} from 'react-redux'
import {
    getAuthenticatedUser,
    getAuthenticationStatus,
    getProfileSmallPhoto,
} from '../../selectors/selectors'

const Header = props => {
    return (
        <header className='header'>
            <Logo />
            <SignIn
                authenticatedUserLogin={props.authenticatedUser.login}
                authenticationStatus={props.authenticationStatus}
                photo={props.getProfileSmallPhoto}
            />
        </header>
    )
}
const mapStateToProps = state => ({
    authenticatedUser: getAuthenticatedUser(state),
    authenticationStatus: getAuthenticationStatus(state),
    smallPhoto: getProfileSmallPhoto(state),
})
export default connect(mapStateToProps, {})(Header)
