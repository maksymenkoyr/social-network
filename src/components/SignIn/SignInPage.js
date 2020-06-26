import React from 'react'
import SignInForm from './SignInForm'
import './SignInPage.scss'

const signIn = formData => {
    console.log(formData)
}
const SignInPage = () => {
    return (
        <div className='sign-in-page'>
            <SignInForm onSubmit={signIn} />
        </div>
    )
}

export default SignInPage
