import {getUsersRequest, getProfileRequest, authenticationRequest} from '../API/requests'
import {
    setUsers,
    setCurrentPage,
    setLoadingStatus,
    setCurrentProfile,
    setAuthenticatedUser,
} from '../actions'

export const getUsers = (pageNumber, pageSize) => {
    return dispatch => {
        getUsersRequest(pageNumber, pageSize).then(data => {
            dispatch(setUsers(data.items, data.totalCount))
        })
    }
}
export const getCurrentPage = (pageNumber, pageSize) => {
    return dispatch => {
        dispatch(setCurrentPage(pageNumber))
        getUsersRequest(pageNumber, pageSize).then(data => {
            dispatch(setUsers(data.items, data.totalCount))
        })
    }
}

export const defineCurrentProfile = userId => {
    return dispatch => {
        dispatch(setLoadingStatus(true))
        getProfileRequest(userId).then(response => {
            dispatch(setCurrentProfile(response))
            dispatch(setLoadingStatus(false))
        })
    }
}

export const authenticateUser = () => {
    return dispatch => {
        authenticationRequest().then(response => {
            dispatch(setAuthenticatedUser(response))
        })
    }
}
