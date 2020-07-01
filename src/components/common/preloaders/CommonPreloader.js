import React from 'react'
import './CommonPreloader.scss'

function ListPreloader() {
    return (
        <div className='lds-roller'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default ListPreloader
