import React from 'react'
import styles from './Button.module.css'
import CirkleLoader from '../loaders/CirkleLoader'

const ButtonWithAction = ({loading, ...props}) => {
    return (
        <button onClick={() => props.action()} className={props.className + ' ' + styles.button}>
            {loading ? <CirkleLoader /> : props.children}
        </button>
    )
}

export default ButtonWithAction
