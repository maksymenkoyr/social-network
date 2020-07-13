import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getUsers} from './actions'
import UsersPrewiev from '../usersPrewiev/UserPrewiev'
import './Users.scss'

const Users = ({getUsers, pageNumber, ...props}) => {
    useEffect(() => {
        getUsers(pageNumber)
    }, [getUsers, pageNumber])
    if (!props.usersGot) {
        return <p>loading...</p>
    }
    return (
        <ul className='users-list'>
            {props.users.map(user => (
                <li>
                    <UsersPrewiev user={user} />
                </li>
            ))}
        </ul>
    )
}
const mapStateToProps = state => ({
    users: state.users.usersList,
    pageNumber: state.users.pageNumber,
    usersGot: state.users.usersGot,
})

export default connect(mapStateToProps, {getUsers})(Users)
