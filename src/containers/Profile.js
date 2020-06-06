import React from 'react'

import ProfilePublications from '../components/AppContent/Profile/ProfilePublications'
import {addPublication, changePublication} from '../actions'
import {connect} from 'react-redux'

const Profile = (props) => {
    return (
        <main className='app__content profile'>
            <div className='profile__background'></div>
            <img src='' alt='' className='profile__avatar'></img>
            <div className='profile__info'></div>
            <ProfilePublications {...props} />
        </main>
    )
}

const mapStateToProps = state => ({
    publicationsList: state.profilePage.publicationsList,
    inputValue: state.profilePage.inputValue
})
const mapDispatchToProps = dispatch => ({
    addPublication: () => {
        dispatch(addPublication())
    },
    updateInput: value => {
        dispatch(changePublication(value))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)

