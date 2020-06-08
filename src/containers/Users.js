import {connect} from 'react-redux'
import React from 'react'
import * as axios from 'axios'
import {REQUEST, API_KEY} from '../constants/serverAPI'
import {getUsers} from '../actions'
import UsersList from '../components/AppContent/Users/UsersList'
class Users extends React.Component {
    componentDidMount() {
        axios.get(REQUEST + 'users', {headers: {'API-KEY': API_KEY}}).then(response => {
            this.props.getUsers(response.data.items)
        })
    }
    render() {
        return (
            <main className='app__content users'>
                <UsersList users={this.props.users}/>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersPage.users
})

const mapDispatchToProps = dispatch => ({
    getUsers: (users) => {
        dispatch(getUsers(users))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
