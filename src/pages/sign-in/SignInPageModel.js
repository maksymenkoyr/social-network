import React from 'react'
import {SignInForm} from '../../features/sign-in'
import './SignInPage.scss'

const SignInPageModel = props => {
    return (
        <div className='sign-in-page'>
            <div className='sign-in-page__form'>
                <SignInForm {...props} />
            </div>
        </div>
    )
}

export default SignInPageModel
