import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getUsers, setPageNumber} from './actions'
import UsersPrewiev from '../usersPrewiev/UserPrewiev'
import './Users.scss'
import {HorizontalLoader} from '../../ui'
import {toggleFrienshipStatus} from './friendship/actions'

const Users = ({getUsers, pageNumber, isUsersLoading, isUsersGot, ...props}) => {
    useEffect(() => {
        function handleScroll() {
            const spaceToEndOfPage =
                document.documentElement.scrollHeight -
                (document.documentElement.clientHeight + window.pageYOffset)
            if (spaceToEndOfPage < 400) {
                if (!isUsersLoading) {
                    getUsers(++pageNumber, {loadUsers: true})
                }
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => document.removeEventListener('scroll', handleScroll)
    }, [getUsers, isUsersLoading, pageNumber])

    useEffect(() => {
        getUsers(pageNumber)
    }, [])

    if (!isUsersGot) {
        return <p>loading...</p>
    }
    return (
        <>
            <ul className='users-list'>
                {props.users.map(user => (
                    <li key={user.id}>
                        <UsersPrewiev
                            user={user}
                            isFrendshipStatusLoading={props.loadingFriendshipStatuses?.[user.id]}
                            toggleFrienshipStatus={props.toggleFrienshipStatus}
                        />
                    </li>
                ))}
            </ul>
            {true ? (
                <div className='users-list__loading'>
                    <HorizontalLoader />
                </div>
            ) : null}
        </>
    )
}
const mapStateToProps = state => ({
    users: state.users.usersList,
    pageNumber: state.users.pageNumber,
    isUsersGot: state.users.usersGot,
    isUsersLoading: state.users.isUsersLoading,
    loadingFriendshipStatuses: state.users.inLoading.friendshipStatuses,
})

export default connect(mapStateToProps, {getUsers, setPageNumber, toggleFrienshipStatus})(Users)
