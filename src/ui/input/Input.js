import React from 'react'
import './Input.scss'
const input = props => {
    return (
        <div className={'input ' + (props.error ? 'input--error' : '')}>
            <input
                placeHolder={props.placeHolder}
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

export default input
