import React from 'react'
import {useForm} from 'react-hook-form'
import {Button, Input, HorizontalLoader} from '../../ui'
import './SignInForm.scss'
import {Redirect} from 'react-router-dom'

const SignInForm = props => {
    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur',
    })
    const onSumbit = data => {
        props.logIn(data)
    }
    if (props.signInComplete) {
        return <Redirect to='/' />
    }
    return (
        <form className='sign-in-form' onSubmit={handleSubmit(onSumbit)}>
            {props.requestSent && !(props.signInFailed || props.signInComplete) ? (
                <HorizontalLoader />
            ) : null}
            <h1 className='sign-in-form__title'>Sign in</h1>
            <p className='sign-in-form__alert'>
                {props.signInFailed ? 'incorect password and/or email' : null}
            </p>
            <Input
                name='email'
                register={register({
                    required: 'Required',
                    minLength: {value: 5, message: 'Minimum 5 characters'},
                    maxLength: {value: 35, message: 'Maximum 5 characters'},
                    pattern: {value: /^\S+@\S+\.\S+$/, message: 'invalid email'},
                })}
                error={errors.email}
                placeholder='Email'
            />
            <Input
                name='password'
                type={'password'}
                register={register({
                    required: 'Required',
                    minLength: {value: 5, message: 'Minimum 5 characters'},
                    maxLength: {value: 35, message: 'Maximum 5 characters'},
                })}
                error={errors.password}
                placeholder='Password'
            />
            <label>
                <input type='checkbox' ref={register} name='rememberMe' />
                Remember me
            </label>
            <Button className='sign-in-form__button'>Sign in</Button>
        </form>
    )
}

export default SignInForm
