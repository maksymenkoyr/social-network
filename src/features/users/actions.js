import {getUsersRequest} from '../../dal/dal'

export const IS_USERS_LOADING = 'IS_USERS_LOADING'
export function isUsersLoading(bool) {
    return {
        type: IS_USERS_LOADING,
        loadingStatus: bool,
    }
}
export const SET_USERS = 'SET_USERS'
export function setUsers(users) {
    return {
        type: SET_USERS,
        users,
    }
}

export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'
export function setPageNumber(pageNumber) {
    return {
        type: SET_PAGE_NUMBER,
        pageNumber,
    }
}

export function getUsers(pageNumber, options = {loadUsers: false}) {
    return function (dispatch) {
        if (options.loadUsers) dispatch(setPageNumber(pageNumber))
        dispatch(isUsersLoading(true))
        getUsersRequest(pageNumber).then(reponse => {
            dispatch(setUsers(reponse.items))
            dispatch(isUsersLoading(false))
        })
    }
}
