import {ADD_PUBLICATION, CHANGE_PUBLICATION_INPUT, GET_USERS, TOGGLE_FOLLOW} from '../constants/actionTypes'

export const addPublication = () => {
    return {type: ADD_PUBLICATION}
}

export const changePublication = value => {
    return {type: CHANGE_PUBLICATION_INPUT, value: value}
}

export const getUsers = (users) => {
    return {type: GET_USERS,
    users: users}
}

export const togleFollow = (id) => {
    return{
        type: TOGGLE_FOLLOW,
        userId: id
    }
}