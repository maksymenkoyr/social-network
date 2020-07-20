import {SET_USERS, IS_USERS_LOADING, SET_PAGE_NUMBER} from './actions'

let initialState = {
    usersGot: false,
    usersList: [],
    pageNumber: 1,
    isUsersLoading: false,
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
        default:
            return state
    }
}
