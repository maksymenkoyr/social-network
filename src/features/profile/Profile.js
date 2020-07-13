import React, {useEffect} from 'react'
import {Button} from '../../ui'
import {defineProfile} from './actions'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import './Profile.scss'

const Profile = ({profile, ...props}) => {
    let {userId} = useParams()
    useEffect(() => {
        props.defineProfile(userId)
    }, [userId])
    if (!props.profileDefine) {
        return <div>loading</div>
    }
    return (
        <div className='profile'>
            <div className='profile__avatar-section'>
                <img
                    className='profile__avatar'
                    src={profile.photos?.large || require('../../lib/defaultAvatar.svg')}
                    alt='avatar'
                />
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
})
export default connect(mapStateToProps, {defineProfile})(Profile)
