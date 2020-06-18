import {
    SET_CURRENT_PAGE,
    SET_USERS,
    SET_FOLLOW_BUTTON_LOADING_STATUS,
    SET_FOLLOWING_STATUS,
} from '../constants/actionTypes'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    inLoading: {
        followButton: false,
    },
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOLLOWING_STATUS:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: action.followingStatus}
                    } else {
                        return user
                    }
                }),
            }
        case SET_USERS:
            return {
                ...state,
                waitResponse: {...state.waitResponse, usersList: false},
                users: action.users,
                totalUsersCount: action.count,
            }
        case SET_FOLLOW_BUTTON_LOADING_STATUS:
            return {
                ...state,
                inLoading: {...state.inLoading, followButton: action.loadingInProgress},
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
