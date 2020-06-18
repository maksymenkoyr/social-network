import {connect} from 'react-redux'
import {toggleFollow} from '../thunks/thunks'
import React from 'react'
import UserPreview from '../components/AppContent/Users/UserPreview'
import ListPreloader from '../components/common/preloaders/ListPreloader'
import {getUsers, getCurrentPage} from '../thunks/thunks'
class Users extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {
        const pages = []
        for (let i = 1; i <= Math.ceil(this.props.totalUsersCount / this.props.pageSize); i++) {
            pages.push(
                <li
                    value={i}
                    onClick={e =>
                        this.props.getCurrentPage(e.currentTarget.value, this.props.pageSize)
                    }
                >
                    {i}
                </li>
            )
            if (i === 10) {
                break
            }
        }
        return (
            <>
                <ul className='users__pages-list'>{pages}</ul>
                <ul className='users__list'>
                    {this.props.users.map(user => {
                        return (
                            <UserPreview
                                user={user}
                                toggleFollow={this.props.toggleFollow}
                                inLoading={this.props.inLoading}
                            />
                        )
                    })}
                </ul>
            </>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    waitResponse: state.usersPage.waitResponse,
    inLoading: state.usersPage.inLoading,
})

// const mapDispatchToProps = dispatch => ({
//     getUsers: (users, count) => {
//         dispatch(getUsers(users, count))
//     },
//     // toggleFollowing: id => {
//     //     dispatch(toggleFollowing(id))
//     // },
//     // setCurrentPage: pageNumber => {
//     //     dispatch(setCurrentPage(pageNumber))
//     // },
// })

export default connect(mapStateToProps, {
    getUsers,
    getCurrentPage,
    toggleFollow,
})(Users)
