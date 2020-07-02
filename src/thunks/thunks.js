import {
    getUsersRequest,
    getProfileRequest,
    authenticationRequest,
    followRequest,
    unfollowRequest,
    SignInRequest,
    signInRequest,
    getHeadlineRequest,
    setHeadlineRequest,
} from '../API/requests'
import {
    setUsers,
    initialize,
    setFollowingStatus,
    setCurrentPage,
    setProfileLoaded,
    setCurrentProfile,
    setAuthenticatedUser,
    setFollowButtonLoadingStatus,
    setProfileHeadline,
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

export const defineProfile = userId => {
    return dispatch => {
        return Promise.all([getProfileRequest(userId), getHeadlineRequest(userId)]).then(
            response => {
                dispatch(setCurrentProfile(response[0]))
                dispatch(setProfileLoaded(true))
                dispatch(setProfileHeadline(response[1]))
            }
        )
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
            dispatch(defineProfile(authenticatedUser.id)).then(() => {
                dispatch(initialize())
            })
        })
    }
}

export const setHeadline = headline => {
    return dispatch => {
        setHeadlineRequest(headline).then(resultCode => {
            if (resultCode === 0) {
                setProfileHeadline(headline)
            }
        })
    }
}
export const getHeadline = headline => {
    return dispatch => {
        debugger
        getHeadlineRequest().then(headline => {
            setHeadline(headline)
        })
    }
}
