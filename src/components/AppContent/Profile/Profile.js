import React from 'react'
import ProfilePublicationsContainer from './ProfilePublicationsContainer'

const Profile = (props) => {
    return (
        <main className="app__content profile">
            <div className="profile__header">

            </div>
            
            <ProfilePublicationsContainer {...props}/>
        </main>
    )
}

export default Profile
