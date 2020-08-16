import React, {useEffect} from 'react'
import {Button} from '../../ui'
import {defineProfile} from './actions'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import './Profile.scss'

const Profile = ({profile, ...props}) => {
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
                    />
                    {isMyProfile ? (
                        <div className='profile__edit-profile-photo'>Edit Profile Photo</div>
                    ) : null}
                </div>
                <Button className='profile__avatar-button'>Setting</Button>
            </div>
            <div className='profile__info-section'>
                <p className='profile__name'>{profile.fullName}</p>
                <div className='profile_work-status'></div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    profile: state.profile.profile,
    profileDefine: state.profile.profileDefine,
    authenticatedUserId: state.initialization.authenticatedUser.id,
})
export default connect(mapStateToProps, {defineProfile})(Profile)
