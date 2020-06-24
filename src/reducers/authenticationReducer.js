import {SET_AUTHENTICATED_USER} from '../constants/actionTypes'

let initialState = {
    authenticatedUser: {
        id: '',
        login: '',
        email: '',
    },
}
const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED_USER: {
            return {
                ...state,
                authenticatedUser: action.user,
            }
        }
        default:
            return state
    }
}

export default authenticationReducer
