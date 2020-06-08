import {
    ADD_PUBLICATION,
    CHANGE_PUBLICATION_INPUT,
    GET_USERS,
    TOGGLE_FOLLOWING
} from '../constants/actionTypes'

export const addPublication = () => {
    return {type: ADD_PUBLICATION}
}

export const changePublication = value => {
    return {type: CHANGE_PUBLICATION_INPUT, value: value}
}

export const getUsers = users => {
    return {type: GET_USERS, users: users}
}

export const toggleFollowing = id => {
    return {
        type: TOGGLE_FOLLOWING,
        userId: id
    }
}
