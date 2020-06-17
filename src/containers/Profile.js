import React from 'react'

// import ProfilePublications from '../components/AppContent/Profile/ProfilePublications'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ProfileInfo from '../components/AppContent/Profile/ProfileInfo'
import {defineCurrentProfile} from '../thunks/thunks'
import ListPreloader from '../components/common/preloaders/ListPreloader'

class Profile extends React.Component {
    componentDidMount() {
        this.props.defineCurrentProfile(
            this.props.match.params.userId || this.props.authenticatedUser.id
        )
    }
    render() {
        if (this.props.inLoading) {
            return <ListPreloader></ListPreloader>
        } else {
            return (
                <>
                    <ProfileInfo {...this.props.currentProfile} />
                    {/* <ProfilePublications {...this.props} /> */}
                </>
            )
        }
    }
}

const mapStateToProps = state => ({
    publicationsList: state.profilePage.publicationsList,
    inputValue: state.profilePage.inputValue,
    currentProfile: state.profilePage.currentProfile,
    inLoading: state.profilePage.inLoading,
    authenticatedUser: state.profilePage.authenticatedUser,
})

export default connect(mapStateToProps, {defineCurrentProfile})(withRouter(Profile))
