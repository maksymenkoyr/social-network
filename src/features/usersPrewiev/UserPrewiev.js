import React from 'react'
import {Button} from '../../ui'
import './UserPrewiev.scss'

const UserPrewiev = ({user, toggleFrienshipStatus, isFrendshipStatusLoading}) => {
    return (
        <div className='user-prewiev'>
            <div className='user-prewiev__avatar'>
                <img alt='' src={user.photos?.small || require('../../lib/defaultAvatar.svg')} />
            </div>
            <div className='user-prewiev__info'>
                <span className='user-prewiev__name'>{user.name}</span>
            </div>
            <div>
                <Button
                    loading={isFrendshipStatusLoading}
                    action={() => toggleFrienshipStatus(user.id, !user.followed)}
                >
                    {user.followed ? 'Unfollow' : 'Follow'}
                </Button>
            </div>
        </div>
    )
}

export default UserPrewiev
