import React from 'react'
import styles from './Button.module.css'
import CirkleLoader from '../loaders/CirkleLoader'

const Button = ({loading, ...props}) => {
    return (
        <button className={props.className + ' ' + styles.button}>
            {props.children}
            {loading ? <CirkleLoader/> : null}
        </button>
    )
}

export default Button
