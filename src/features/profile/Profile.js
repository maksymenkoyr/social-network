import React, {useEffect, useState} from 'react'
import {Button, CirkleLoader, EditingButton, SocialNetworkButton} from '../../ui'
import {defineProfile, setProfilePhoto} from './actions'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import './Profile.scss'
import EditProfilePhoto from './EditProfilePhoto'
import {facebook} from '../../lib/constants'
import ProfileHeadline from './ProfileHeadline'

const Profile = ({profile, ...props}) => {
    const [photoEditing, setPhotoEditing] = useState(null)
    const {userId} = useParams()
    useEffect(() => {
        props.defineProfile(userId)
    }, [userId])
    if (!props.profileDefine) {
        return <CirkleLoader big blue center />
    }
    const isMyProfile = props.authenticatedUserId === +userId
    console.log(Object.keys(profile).length)
    return (
        // доработать лоадер в initialization, продолжить работу надд profile headline
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
                <ProfileHeadline></ProfileHeadline>
                <div
                    className={
                        'profile__job-preferences ' +
                        (profile.lookingForAJob ? 'profile__job-preferences--turned-off' : null)
                    }
                >
                    {' '}
                    <h3>
                        {profile.lookingForAJob ? 'Open to work' : 'Edit your job preferencess'}
                    </h3>
                    <p className='profile__job-preferences-discription'>
                        {profile.lookingForAJobDiscription}
                    </p>
                </div>
                <div className='profile__about'>
                    <h3 className='profile__about-title'>About me:</h3>
                    <p className='profile__about-content'>{profile.aboutMe}</p>
                    <EditingButton classes={'profile__editing-button'} />
                </div>
                <div className='profile__contacts'>
                    <h3 className='profile__contacts-title'>Contacts:</h3>
                    {/* {Object.entries(profile.contacts).map()} */}
                    <SocialNetworkButton socialNetwork={facebook} />
                    <EditingButton classes={'profile__editing-button'} />
                </div>
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
