import {
    ADD_PUBLICATION,
    CHANGE_PUBLICATION_INPUT,
    SET_USERS,
    TOGGLE_FOLLOWING,
    SET_CURRENT_PAGE,
    AUTHENTICATION,
    SET_RESPONSE_WAITING,
    SET_LOADING_STATUS,
    SET_CURRENT_PROFILE,
    SET_AUTHENTICATED_USER,
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

export const toggleFollowing = id => ({
    type: TOGGLE_FOLLOWING,
    userId: id,
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

export const setResponseWaiting = target => ({
    type: SET_RESPONSE_WAITING,
    target,
})

export const setLoadingStatus = loadingInProgress => ({
    type: SET_LOADING_STATUS,
    loadingInProgress,
})

export const setAuthenticatedUser = user => ({
    type: SET_AUTHENTICATED_USER,
    user,
})
