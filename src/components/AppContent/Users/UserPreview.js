import React from 'react'
import './Users.scss'

const UserPreview = ({user, toggleFollowing}) => {
    return (
        <li className='user-preview'>
            <img
                alt=''
                className='user-preview__avatar'
                src={user.photos.small || 'images/defaultAvatar.png'}
            ></img>
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
