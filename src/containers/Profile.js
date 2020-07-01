import React, {useEffect, useState} from 'react'

// import ProfilePublications from '../components/AppContent/Profile/ProfilePublications'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ProfilePage from '../components/AppContent/Profile/ProfilePage'
import {defineProfile} from '../thunks/thunks'
import CommonPreloader from '../components/common/preloaders/CommonPreloader'
import {addRedirectForNonAuthorized} from '../HOCs/HOCs'
import {getAuthenticatedUser, getProfileLoaded, getProfile} from '../selectors/selectors'
import {getHeadLine} from '../API/requests'

const Profile = props => {
    useEffect(() => {
        defineProfile(props.match.params.userId)
    }, [])
    console.log(props)
    if (props.profileLoaded) {
        return <ProfilePage {...props.profile} />
    } else {
        return <CommonPreloader />
    }
}

const mapStateToProps = state => ({
    authenticatedUser: getAuthenticatedUser(state),
    profileLoaded: getProfileLoaded(state),
    profile: getProfile(state),
})

export default connect(mapStateToProps, {defineProfile, })(
    withRouter(addRedirectForNonAuthorized(Profile))
)
