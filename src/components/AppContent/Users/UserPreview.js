import React from 'react'
import './Users.scss'
import {Link} from 'react-router-dom'

    const UserPreview = ({user, toggleFollowing}) => {
    return (
        <li className='user-preview'>
            <Link to={'/profile/' + user.id} className='user-preview__avatar'>
                <img alt='' src={user.photos.small || 'images/defaultAvatar.png'}></img>
            </Link>
            <div className='user-preview__info'>
                <p className='user-preview__name'>{user.name}</p>
                <p className='user-preview__status'>{user.status}</p>
                <div
                    className={user.followed ? 'user-preview__unfollow' : 'user-preview__follow'}
                    onClick={() => {
                        toggleFollowing(user.id)
                    }}
                >
                    {user.followed ? 'unfollow' : 'follow'}
                </div>
            </div>
        </li>
    )
}

export default UserPreview
