import {getUsersRequest} from '../../dal/dal'

export const SET_USERS = 'SET_USERS'
export function setUsers(users) {
    return {
        type: SET_USERS,
        users,
    }
}

export function getUsers(pageNumber) {
    return function (dispatch) {
        getUsersRequest(pageNumber).then(reponse => {
            dispatch(setUsers(reponse.items))
        })
    }
}
