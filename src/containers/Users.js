import {connect} from 'react-redux'
import React from 'react'
import UserPreview from '../components/AppContent/UserPreview'
import * as axios from 'axios'
import {REQUEST, API_KEY} from '../constants/serverAPI'
import {getUsers} from '../actions'
class Users extends React.Component {
    componentDidMount() {
        axios.get(REQUEST + 'users', {headers: {'API-KEY': API_KEY}}).then(response => {
            console.log(this)
            this.props.getUsers(response.data.items)
        })
    }
    render() {
        return (
            <main className='app__content users'>
                <ul className='users__list'>
                    {this.props.users.map(user =>{
                       return (
                        <UserPreview user={user} />
                    )})}
                </ul>
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
