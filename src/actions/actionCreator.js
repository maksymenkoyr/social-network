import {
    ADD_PUBLICATION,
    CHANGE_PUBLICATION_INPUT,
    SET_USERS,
    SET_CURRENT_PAGE,
    AUTHENTICATION,
    SET_PROFILE_LOADING_STATUS,
    SET_CURRENT_PROFILE,
    SET_AUTHENTICATED_USER,
    SET_FOLLOWING_STATUS,
    SET_FOLLOW_BUTTON_LOADING_STATUS,
    INITIALIZE,
} from '../constants/actionTypes'

export const addPublication = () => ({
    type: ADD_PUBLICATION,
})

export const changePublication = value => ({
    type: CHANGE_PUBLICATION_INPUT,
    value: value,
})

export const setUsers = (users, count) => ({
    type: SET_USERS,
    users: users,
    count: count,
})

export const setFollowingStatus = (id, followingStatus) => ({
    type: SET_FOLLOWING_STATUS,
    userId: id,
    followingStatus,
})

export const setCurrentPage = pageNumber => ({
    type: SET_CURRENT_PAGE,
    pageNumber: pageNumber,
})

export const setCurrentProfile = currentProfile => ({
    type: SET_CURRENT_PROFILE,
    currentProfile,
})

export const authenticate = authenticatedUser => ({
    type: AUTHENTICATION,
    authenticatedUser,
})

export const setProfileLoadingStatus = loadingInProgress => ({
    type: SET_PROFILE_LOADING_STATUS,
    loadingInProgress,
})
export const setFollowButtonLoadingStatus = loadingInProgress => ({
    type: SET_FOLLOW_BUTTON_LOADING_STATUS,
    loadingInProgress,
})

export const setAuthenticatedUser = user => ({
    type: SET_AUTHENTICATED_USER,
    user,
})

export const initialize = () => ({
    type: INITIALIZE,
})
