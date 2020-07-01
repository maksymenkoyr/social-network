import React from 'react'
import './SignIn.scss'
import Button from '../common/Buttons/Button'

const SignIn = ({authenticatedUserLogin, authenticationStatus, photo}) => {
    return (
        <div className='signIn'>
            <img
                className='signIn__signed-in-user-image'
                src={photo || './images/defaultAvatar.svg'}
            ></img>
            <p className='signIn__signed-in-user-name'>{authenticatedUserLogin}</p>
            <Button
                className={'signIn__button ' + (authenticationStatus && 'signIn__button--logout')}
            >
                {authenticationStatus ? 'Sign Out' : 'Sign In'}
            </Button>
        </div>
    )
}

export default SignIn
