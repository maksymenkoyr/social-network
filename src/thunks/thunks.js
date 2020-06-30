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
    initialize,
    setFollowingStatus,
    setCurrentPage,
    setProfileLoadingStatus,
    setCurrentProfile,
    setAuthenticatedUser,
    setFollowButtonLoadingStatus,
} from '../actions/actionCreator'

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
        return getProfileRequest(userId).then(response => {
            console.log('prof')
            dispatch(setCurrentProfile(response))
        })
    }
}

export const authenticateUser = () => {
    return dispatch => {
        return authenticationRequest().then(response => {
            dispatch(setAuthenticatedUser(response))
            return response
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
                dispatch(authenticateUser())
            } else {
                return setError('server', 'incorect signIn data', 'Invalid email or password')
            }
        })
    }
}

export const initApp = () => {
    return dispatch => {
        dispatch(authenticateUser()).then(authenticatedUser => {
            dispatch(defineCurrentProfile(authenticatedUser.id)).then(() => {
                console.log('init')
                dispatch(initialize())
            })
        })
    }
}
