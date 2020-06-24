import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {Input} from '../common/CostumFormComponents'

const required = value => (value ? undefined : true)

const SignInForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field placeholder='login' name='login' component={Input} validate={[required]}></Field>
            <Field placeholder='password' name='password' component='input' type='password'></Field>
            <Field name='remberMe' component='input' type='checkbox'></Field>
            <button type='submit'>sign in</button>
        </form>
    )
}

export default reduxForm({form: 'signIn'})(SignInForm)
