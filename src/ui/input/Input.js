import React from 'react'
import './Input.scss'
const Input = ({type = 'default', ...props}) => {
    return (
        <div className={'input ' + (props.error ? 'input--error' : '')}>
            <input
                type={type}
                placeholder={props.placeholder}
                className='input__field'
                ref={props.register}
                name={props.name}
            />
            <label className='input__alert' htmlFor={props.name}>
                {props.error?.message}
            </label>
        </div>
    )
}

export default Input
