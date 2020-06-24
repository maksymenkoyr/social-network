import React from 'react'
import SignInForm from './SignInForm'
const signIn = formData => {
    console.log(formData)
}
const SignInPage = () => {
    return <SignInForm onSubmit={signIn} />
}

export default SignInPage
