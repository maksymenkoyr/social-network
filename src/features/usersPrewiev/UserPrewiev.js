import React from 'react'
import {Button} from '../../ui'
import './UserPrewiev.scss'

const UserPrewiev = ({user}) => {
    return (
        <div className='user-prewiev'>
            <div className='user-prewiev__avatar'>
                <img alt='' src={user.photo?.small || require('../../lib/defaultAvatar.svg')} />
            </div>
            <div className='user-prewiev__info'>
                <span className='user-prewiev__name'>{user.name}</span>
            </div>
            <div>
                <Button>Follow</Button>
            </div>
        </div>
    )
}

export default UserPrewiev
