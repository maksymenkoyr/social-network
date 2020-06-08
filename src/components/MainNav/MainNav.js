import React from 'react'
import './MainNav.scss'
import {NavLink} from 'react-router-dom'

const MainNav = () => {
    return (
        <nav className='main-nav'>
            <ul className='pages-navigation'>
                <li>
                    <NavLink
                        to='/profile'
                        activeClassName='pages-navigation__link--active'
                        className='pages-navigation__link'
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName='pages-navigation__link--active'
                        className='pages-navigation__link'
                        to='/messages'
                    >
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName='pages-navigation__link--active'
                        className='pages-navigation__link'
                        to='/users'
                    >
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav
