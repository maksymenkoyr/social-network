import React from 'react'
import './Users.scss'

const UserPreview = ({user}) => {
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
                {user.followed ? (
                    <div className='user-preview__unfollow'>unfollow</div>
                ) : (
                    <div className='user-preview__follow'>follow</div>
                )}
            </div>
        </li>
    )
}

export default UserPreview
