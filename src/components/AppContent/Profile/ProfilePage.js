import React from 'react'
import './ProfilePage.scss'
import Button from '../../common/Buttons/Button'
import ProfileHeadline from './ProfileHeadline'
import {getHeadlineRequest} from '../../../API/requests'

const ProfilePage = ({setHeadline, profileHeadline, ...props}) => {
    return (
        <div className='profile-page'>
            <div className='profile-page__photo-follow'>
                <img
                    src={props.photos.large || 'images/defaultAvatar.svg'}
                    alt=''
                    className='profile-page__avatar'
                />
                <Button className='profile-page__follow-button'>Follow</Button>
            </div>
            <div className='profile-page__info'>
                <p className='profile-page__name'>{props.fullName}</p>
                <ProfileHeadline setHeadline={setHeadline} profileHeadline={profileHeadline} />
                <div className='profile-page__contacts'>
                    <span className='contacts__title'>Contacts:</span>
                </div>
                <div className='profile-page__job'>
                    <span className=''>Open to job opportunities</span>
                    <br />
                    Junior front-end developer
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
