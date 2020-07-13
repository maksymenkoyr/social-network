import {SET_USERS} from './actions'

let initialState = {
    usersGot: false,
    usersList: null,
    pageNumber: 1,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                usersList: action.users,
                usersGot: true,
            }
        default:
            return state
    }
}
