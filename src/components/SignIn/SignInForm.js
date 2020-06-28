import React from 'react'
import {useForm} from 'react-hook-form'
import {signIn} from '../../thunks/thunks'
import {connect} from 'react-redux'

const SignInForm = ({signIn}) => {
    const {register, handleSubmit, errors, setError} = useForm({
        mode: 'onBlur',
    })
    const onSubmit = data => {
        console.log(data)
        signIn(data, setError)
    }

    return (
        <form className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
            <input
                className={`sign-in-form__input ${errors.email && 'sign-in-form__input--error'}`}
                id='email'
                placeholder='email'
                name='email'
                type='text'
                ref={register({
                    required: 'Required',
                    minLength: {value: 5, message: 'Minimum 5 characters'},
                    maxLength: {value: 35, message: 'Maximum 5 characters'},
                    // pattern: {value: /^\S+@\S+\.\S+$/, message: 'invalid email'},
                })}
            />
            <label htmlFor='email'>
                <span className='sign-in-form__alert'>{errors.email?.message}</span>
            </label>
            <input
                className={`sign-in-form__input ${errors.password && 'sign-in-form__input--error'}`}
                placeholder='password'
                name='password'
                id='password'
                type='password'
                ref={register({
                    required: 'Required',
                    minLength: {value: 5, message: 'Minimum 5 characters'},
                    maxLength: {value: 35, message: 'Maximum 5 characters'},
                })}
            />

            <label htmlFor='password'>
                <span className='sign-in-form__alert'>{errors.password?.message}</span>
            </label>
            <label className='sign-in-form__checkbox' htmlFor='remeberMe'>
                <input id='rememberMe' name='rememberMe' type='checkbox' ref={register} />
                Remember me
            </label>

            <button className='sign-in-form__button' type='submit' ref={register}>
                sign in
            </button>
            {errors.server && (
                <span className='sign-in-form__response-alert'>{errors.server?.message}</span>
            )}
        </form>
    )
}

export default connect(null, {signIn})(SignInForm)
