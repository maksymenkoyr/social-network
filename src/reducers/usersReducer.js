import {TOGGLE_FOLLOWING, SET_CURRENT_PAGE, SET_USERS} from '../constants/actionTypes'
import {follow, unFollow, followStatus} from '../API/requests'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    waitResponse: {
        followButton: false,
        usersList: true,
    },
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_RESPONSE_WAITING:
        //     if (action.target === FOLLOW_BUTTON) {
        //         return {
        //             ...state,
        //             waitResponse: {...state.waitResponse, followButton: true},
        //         }
        //     } else if (action.target === USER_LIST) {
        //         return {
        //             ...state,
        //             waitResponse: {...state.waitResponse, userList: true},
        //         }
        //     } else {
        //         break
        //     }
        case SET_USERS:
            return {
                ...state,
                waitResponse: {...state.waitResponse, usersList: false},
                users: action.users,
                totalUsersCount: action.count,
            }
        case TOGGLE_FOLLOWING:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        if (user.followed) {
                            console.log(followStatus(user.id))
                            return {
                                ...user,
                                followed: unFollow(user.id).then(() => {
                                    return followStatus(user.id)
                                }),
                            }
                        } else {
                            console.log(followStatus(user.id))
                            return {
                                ...user,
                                followed: followStatus(user.id),
                            }
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
