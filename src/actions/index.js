import {
    ADD_PUBLICATION,
    CHANGE_PUBLICATION_INPUT,
    GET_USERS,
    TOGGLE_FOLLOWING,
    SET_CURRENT_PAGE,
    SET_CURRENT_USER,
    AUTHENTICATION,
    SET_RESPONSE_WAITING,
} from '../constants/actionTypes'

export const addPublication = () => ({
    type: ADD_PUBLICATION,
})

export const changePublication = value => ({
    type: CHANGE_PUBLICATION_INPUT,
    value: value,
})

export const getUsers = (users, count) => ({
    type: GET_USERS,
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

export const setCurrentUser = currentUser => ({
    type: SET_CURRENT_USER,
    currentUser,
})

export const authenticate = authenticatedUser => ({
    type: AUTHENTICATION,
    authenticatedUser,
})

export const setResponseWaiting = target => ({
    type: SET_RESPONSE_WAITING,
    target,
})
