import React from 'react'
import './MainNav.scss'
import {NavLink} from 'react-router-dom'

const MainNav = () => {
    return (
        <nav className='main-nav'>
            <ul>
                <li>
                    <NavLink to='/profile'>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/messages'>Messages</NavLink>
                </li>
                <li></li>
                <li>4</li>
                <li>5</li>
            </ul>
        </nav>
    )
}

export default MainNav
