import React from 'react'
import styles from './Button.module.css'

const Button = props => {
    console.log(props)
    return <button className={props.className + ' ' + styles.button}>{props.children}</button>
}

export default Button
