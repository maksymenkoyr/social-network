import {GET_USERS, TOGGLE_FOLLOWING, SET_CURRENT_PAGE} from '../constants/actionTypes'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.users,
                totalUsersCount: action.count,
            }
        case TOGGLE_FOLLOWING:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed,
                        }
                    } else {
                        return user
                    }
                }),
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber,
            }
        default:
            return state
    }
}

export default usersReducer
