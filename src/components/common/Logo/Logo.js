import React from 'react'
import './Logo.scss'

export const LogoTitle = () => <h1 className='logo__title'>In touch</h1>

export const LogoImage = () => <img alt='' className='logo__image' src='./images/logo.svg'></img>

const Logo = () => {
    return (
        <div className='logo'>
            <LogoImage></LogoImage>
            <LogoTitle></LogoTitle>
        </div>
    )
}

export default Logo
