import React from 'react'
import FollowButton from '../../common/FollowButton'
import './Profile.scss'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    profile: {
        justifySelf: 'end',
        alignSelf: 'start',
    },
})
const ProfileInfo = props => {
    const classes = useStyles()
    return (
        <div className='profile__info'>
            <img
                src={props.photos.large || 'images/defaultAvatar.png'}
                alt=''
                className='profile__avatar'
            ></img>
            <p className='profile__name'>{props.fullName}</p>
            <FollowButton className={classes.profile}></FollowButton>
        </div>
    )
}

export default ProfileInfo
