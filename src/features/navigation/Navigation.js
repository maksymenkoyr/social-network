import React from 'react'
import {NavLink} from 'react-router-dom'
import {userIdSelector} from '../initialization'
import {connect} from 'react-redux'
import './navigation.scss'
const Navigation = props => {
    return (
        <ul className='main-nav'>
            <li className='main-nav__button'>
                <NavLink to={`/profile/${props.userId}`}>Profile</NavLink>
            </li>
            <li className='main-nav__button'>
                <NavLink to={`/users`}>Users</NavLink>
            </li>
        </ul>
    )
}
const mapStateToProps = state => ({
    userId: userIdSelector(state),
})
export default connect(mapStateToProps)(Navigation)
