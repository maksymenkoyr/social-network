import {SET_USERS, IS_USERS_LOADING, SET_PAGE_NUMBER} from './actions'
import {
    ADD_USER_TO_FRIENDS,
    SET_FRIENDSHIP_STATUS_AS_CHANGING,
    REMOVE_USER_FROM_FRIENDS,
} from './friendship/actions'

let initialState = {
    usersGot: false,
    usersList: [],
    pageNumber: 1,
    isUsersLoading: false,
    inLoading: {
        friendshipStatuses: {}, // id users whoes friendship status is changing
    },
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                usersList: state.usersList.concat(action.users),
                usersGot: true,
            }
        case IS_USERS_LOADING:
            return {
                ...state,
                isUsersLoading: action.loadingStatus,
            }
        case SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.pageNumber,
            }
        case ADD_USER_TO_FRIENDS:
            return {
                ...state,
                usersList: state.usersList.map(user => {
                    if (user.id === action.userId) {
                        user.followed = true
                        return user
                    } else {
                        return user
                    }
                }),
                inLoading: {
                    ...state.inLoading,
                    friendshipStatuses: {
                        ...state.inLoading.friendshipStatuses,
                        [action.userId]: false,
                    },
                },
            }
        case REMOVE_USER_FROM_FRIENDS:
            return {
                ...state,
                inLoading: {
                    ...state.inLoading,
                    friendshipStatuses: {
                        ...state.inLoading.friendshipStatuses,
                        [action.userId]: false,
                    },
                },
                usersList: state.usersList.map(user => {
                    if (user.id === action.userId) {
                        user.followed = false
                        return user
                    } else {
                        return user
                    }
                }),
            }
        case SET_FRIENDSHIP_STATUS_AS_CHANGING: {
            return {
                ...state,
                inLoading: {
                    ...state.inLoading,
                    friendshipStatuses: {
                        ...state.inLoading.friendshipStatuses,
                        [action.userId]: true,
                    },
                },
            }
        }
        default:
            return state
    }
}
