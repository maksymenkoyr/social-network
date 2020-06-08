import {GET_USERS, TOGGLE_FOLLOWING} from '../constants/actionTypes'

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
        case TOGGLE_FOLLOWING:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
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
