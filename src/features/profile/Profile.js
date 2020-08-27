import React, {useEffect, useState} from 'react'
import {Button} from '../../ui'
import {defineProfile, setProfilePhoto} from './actions'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import './Profile.scss'
import EditProfilePhoto from './EditProfilePhoto'

const Profile = ({profile, ...props}) => {
    const [photoEditing, setPhotoEditing] = useState(null)
    const {userId} = useParams()
    useEffect(() => {
        props.defineProfile(userId)
    }, [userId])
    if (!props.profileDefine) {
        return <div>loading</div>
    }
    const isMyProfile = props.authenticatedUserId === +userId
    return (
        <div className='profile'>
            <div className='profile__avatar-section'>
                <div className='profile__avatar-wrapper'>
                    <img
                        className='profile__avatar'
                        src={profile.photos?.large || require('../../lib/defaultAvatar.svg')}
                        alt='avatar'
                        onClick={() => setPhotoEditing(true)}
                    />
                    {isMyProfile ? (
                        <div
                            className='profile__edit-profile-photo'
                            onClick={() => setPhotoEditing(true)}
                        >
                            Edit Profile Photo
                        </div>
                    ) : null}
                </div>
                <Button className='profile__avatar-button'>Setting</Button>
            </div>
            <div className='profile__info-section'>
                <p className='profile__name'>{profile.fullName}</p>
                <div className='profile_work-status'></div>
            </div>
            {photoEditing ? (
                <EditProfilePhoto
                    setPhotoEditing={setPhotoEditing}
                    setProfilePhoto={img => props.setProfilePhoto(img, userId)}
                />
            ) : null}
        </div>
    )
}
const mapStateToProps = state => ({
    profile: state.profile.profile,
    profileDefine: state.profile.profileDefine,
    authenticatedUserId: state.initialization.authenticatedUser.id,
})
export default connect(mapStateToProps, {defineProfile, setProfilePhoto})(Profile)
