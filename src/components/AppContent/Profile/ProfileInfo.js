import React from 'react'

const ProfileInfo = props => {
    console.log(props)
    return (
        <>
            <div className='profile__background'></div>
            <img src='' alt='' className='profile__avatar'></img>
            <div className='profile__info'>{props.fullName}</div>
        </>
    )
}

export default ProfileInfo
