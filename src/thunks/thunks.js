import {
    getUsersRequest,
    getProfileRequest,
    authenticationRequest,
    followRequest,
    unfollowRequest,
    SignInRequest,
    signInRequest,
} from '../API/requests'
import {
    setUsers,
    setFollowingStatus,
    setCurrentPage,
    setProfileLoadingStatus,
    setCurrentProfile,
    setAuthenticatedUser,
    setFollowButtonLoadingStatus,
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
        dispatch(setProfileLoadingStatus(true))
        getProfileRequest(userId).then(response => {
            dispatch(setCurrentProfile(response))
            dispatch(setProfileLoadingStatus(false))
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

export const toggleFollow = (userId, followingStatus) => {
    return dispatch => {
        dispatch(setFollowButtonLoadingStatus(true))
        // if (followingStatus) {
        //     unfollowRequest(userId)
        //         .then(setFollowingStatus(userId, !followingStatus))
        //         .then(dispatch(setFollowButtonLoadingStatus(false)))
        // } else {
        //     followRequest(userId)
        //         .then(setFollowingStatus(userId, !followingStatus))
        //         .then(dispatch(setFollowButtonLoadingStatus(false)))
        // }gi
    }
}

export const signIn = (data, setError) => {
    return dispatch => {
        signInRequest(data).then(response => {
            if (response.resultCode === 0) {
                dispatch.authenticateUser()
            } else {
                return setError('server', 'incorect signIn data', 'Invalid email or password')
            }
        })
    }
}
