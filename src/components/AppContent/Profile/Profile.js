import React from 'react'
import ProfilePublications from './ProfilePublications'

const Profile = (props) => {
    return (
        <main className="app__content profile">
            <div className="profile__header">

            </div>
            
            <ProfilePublications {...props}/>
        </main>
    )
}

export default Profile
