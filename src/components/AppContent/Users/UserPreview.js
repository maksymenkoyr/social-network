import React from 'react'
import './Users.scss'
import {Link} from 'react-router-dom'
import FollowButton from '../../common/FollowButton'

const UserPreview = ({user, toggleFollow, inLoading}) => {
    return (
        <li className='user-preview'>
            <Link to={'/profile/' + user.id} className='user-preview__avatar'>
                <img alt='' src={user.photos.small || 'images/defaultAvatar.png'}></img>
            </Link>
            <div className='user-preview__info'>
                <p className='user-preview__name'>{user.name}</p>
                <p className='user-preview__status'>{user.status}</p>
                <FollowButton
                    toggleFollow={toggleFollow}
                    followed={user.followed}
                    userId={user.id}
                    loadingStatus={inLoading.followButton}
                />
            </div>
        </li>
    )
}

export default UserPreview
