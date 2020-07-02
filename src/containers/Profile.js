import React, {useEffect, useState} from 'react'

// import ProfilePublications from '../components/AppContent/Profile/ProfilePublications'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ProfilePage from '../components/AppContent/Profile/ProfilePage'
import {defineProfile, setHeadline} from '../thunks/thunks'
import CommonPreloader from '../components/common/preloaders/CommonPreloader'
import {addRedirectForNonAuthorized} from '../HOCs/HOCs'
import {getAuthenticatedUser, getProfileLoaded, getProfile, getProfileHeadline} from '../selectors/selectors'

const Profile = props => {
    useEffect(() => {
        defineProfile(props.match.params.userId)
    }, [])
    console.log(props)
    if (props.profileLoaded) {
        return <ProfilePage {...props.profile} setHeadline={props.setHeadline} profileHeadline={props.profileHeadline}/>
    } else {
        return <CommonPreloader />
    }
}

const mapStateToProps = state => ({
    authenticatedUser: getAuthenticatedUser(state),
    profileLoaded: getProfileLoaded(state),
    profile: getProfile(state),
    profileHeadline: getProfileHeadline(state),
})

export default connect(mapStateToProps, {defineProfile, setHeadline})(
    withRouter(addRedirectForNonAuthorized(Profile))
)
