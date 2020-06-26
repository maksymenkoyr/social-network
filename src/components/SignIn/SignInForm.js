import React from 'react'
import {Input} from '../common/CostumFormComponents'
import {useForm} from 'react-hook-form'

const SignInForm = () => {
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = data => console.log(data)

    return (
        <form className='sign-in-page__form' onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='login' name='login' type='text' ref={register({required: true})} />
            {errors.login && <p>error</p>}
            <input placeholder='password' name='password' type='password' ref={register} />
            <input name='remberMe' type='checkbox' ref={register} />

            <button type='submit' ref={register}>
                sign in
            </button>
        </form>
    )
}

export default SignInForm
