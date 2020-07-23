import React from 'react'
import styles from './Button.module.css'
import CirkleLoader from '../loaders/CirkleLoader'

const Button = ({loading, ...props}) => {
    return (
        <button onClick={() => props.action()} className={props.className + ' ' + styles.button}>
            {loading ? <CirkleLoader /> : props.children}
        </button>
    )
}

export default Button
