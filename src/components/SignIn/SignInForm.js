import React from 'react'
import {Input} from '../common/CostumFormComponents'
import {useFormik} from 'formik'

const SignInForm = () => {
    const signIn = useFormik({
        initialValues: {
            email: '',
            password: '',
            remberMe: false,
        },
        onSubmit: values => {
            console.log(values)
        },
    })
    return (
        <form className='sign-in-page__form'>
            <input placeholder='login' name='login' type='text' />
            <input placeholder='password' name='password' type='password' />
            <input name='remberMe' type='checkbox' />
            <button type='submit'>sign in</button>
        </form>
    )
}

export default SignInForm
