import React from 'react'

import ProfilePublications from '../components/AppContent/Profile/ProfilePublications'
import {addPublication, changePublication, setCurrentUser} from '../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ProfileInfo from '../components/AppContent/Profile/ProfileInfo'
import * as axios from 'axios'
import {REQUEST, API_KEY} from '../constants/serverAPI'

class Profile extends React.Component {
    componentDidMount() {
        axios
            .get(REQUEST + `profile/${this.props.match.params.userId}`, {
                headers: {'API-KEY': API_KEY},
            })
            .then(response => {
                this.props.setCurrentUser(response.data)
            })
    }
    render() {
        return (
            <main className='app__content profile'>
                <ProfileInfo {...this.props.currentUser} />
                <ProfilePublications {...this.props} />
            </main>
        )
    }
}

const mapStateToProps = state => ({
    publicationsList: state.profilePage.publicationsList,
    inputValue: state.profilePage.inputValue,
    currentUser: state.profilePage.currentUser,
})
const mapDispatchToProps = dispatch => ({
    addPublication: () => {
        dispatch(addPublication())
    },
    updateInput: value => {
        dispatch(changePublication(value))
    },
    setCurrentUser: currentUser => {
        dispatch(setCurrentUser(currentUser))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
