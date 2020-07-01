import React from 'react'

// import ProfilePublications from '../components/AppContent/Profile/ProfilePublications'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ProfilePage from '../components/AppContent/Profile/ProfilePage'
import {defineCurrentProfile} from '../thunks/thunks'
import CommonPreloader from '../components/common/preloaders/CommonPreloader'
import {addRedirectForNonAuthorized} from '../HOCs/HOCs'
import {getAuthenticatedUser} from '../selectors/selectors'

const Profile = props => (
    <>
        <ProfilePage {...props.currentProfile} />
    </>
)

const mapStateToProps = state => ({
    publicationsList: state.profilePage.publicationsList,
    inputValue: state.profilePage.inputValue,
    currentProfile: state.profilePage.currentProfile,
    inLoading: state.profilePage.inLoading,
    authenticatedUser: getAuthenticatedUser(state),
})

export default connect(mapStateToProps, {defineCurrentProfile})(
    withRouter(addRedirectForNonAuthorized(Profile))
)
