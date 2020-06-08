import {connect} from 'react-redux'
import React from 'react'
import * as axios from 'axios'
import {REQUEST, API_KEY} from '../constants/serverAPI'
import {getUsers, toggleFollowing} from '../actions'
import UserPreview from '../components/AppContent/Users/UserPreview'
class Users extends React.Component {
    componentDidMount() {
        axios.get(REQUEST + 'users', {headers: {'API-KEY': API_KEY}}).then(response => {
            this.props.getUsers(response.data.items)
        })
    }
    render() {
        console.log(this.props)
        return (
            <main className='app__content users'>
                <ul className='users__list'>
                    {this.props.users.map(user => {
                        return <UserPreview user={user} toggleFollowing={this.props.toggleFollowing} />
                    })}
                </ul>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersPage.users
})

const mapDispatchToProps = dispatch => ({
    getUsers: users => {
        dispatch(getUsers(users))
    },
    toggleFollowing: id => {
        dispatch(toggleFollowing(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
