import React from 'react'
import ProfilePublications from './ProfilePublications'

const ProfilePublicationsContainer = (props) => {
    return (
        <ProfilePublications dispatch={props.dispatch}
            profileState={props.state}
        ></ProfilePublications>
    )
}

export default ProfilePublicationsContainer
