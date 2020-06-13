import {connect} from 'react-redux'
import React from 'react'
import * as axios from 'axios'
import {REQUEST, API_KEY} from '../constants/serverAPI'
import {getUsers, toggleFollowing, setCurrentPage} from '../actions'
import UserPreview from '../components/AppContent/Users/UserPreview'
import {userAPI} from '../API/api'
class Users extends React.Component {
    componentDidMount() {
        userAPI.getUsers(this.props.pageNumber, this.props.pageSize).then(data => {
            this.props.getUsers(data.items, data.totalCount)
        })
    }

    setCurrentPage(pageNumber) {
        console.log(this.props.currentPage)
        this.props.setCurrentPage(pageNumber)
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.getUsers(data.items, data.totalCount)
        })
    }

    render() {
        const pages = []
        for (let i = 1; i <= Math.ceil(this.props.totalUsersCount / this.props.pageSize); i++) {
            pages.push(
                <li
                    value={i}
                    className={this.props.currentPage === i && 'users__pages-item--current'}
                    onClick={e => this.setCurrentPage(e.currentTarget.value)}
                >
                    {i}
                </li>
            )
            if (i === 10) {
                break
            }
        }
        return (
            <main className='app__content users'>
                <ul className='users__pages-list'>{pages}</ul>
                <ul className='users__list'>
                    {this.props.users.map(user => {
                        return (
                            <UserPreview user={user} toggleFollowing={this.props.toggleFollowing} />
                        )
                    })}
                </ul>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
})

const mapDispatchToProps = dispatch => ({
    getUsers: (users, count) => {
        dispatch(getUsers(users, count))
    },
    toggleFollowing: id => {
        dispatch(toggleFollowing(id))
    },
    setCurrentPage: pageNumber => {
        dispatch(setCurrentPage(pageNumber))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
