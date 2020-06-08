import {GET_USERS, TOGGLE_FOLLOW} from '../constants/actionTypes'

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.users
            }
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.userdId === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    } else {
                        return user
                    }
                })
            }
        default:
            return state
    }
}

export default usersReducer
