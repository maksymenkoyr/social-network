import React from 'react'
import UserPreview from './UserPreview'

const UsersList = ({users}) => {
    console.log(users)
    return (
        <ul className='users__list'>
            {users.map(user => {
                return <UserPreview user={user} />
            })}
        </ul>
    )
}

export default UsersList
