import React from 'react'


const Button = ({className, ...props}) => {
    return <button className={className + ' button'} {...props}></button>
}

export default Button
