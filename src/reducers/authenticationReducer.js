import {SET_AUTHENTICATED_USER} from '../constants/actionTypes'

let initialState = {
    authenticatedUser: {
        id: '',
        login: '',
        email: '',
    },
    authenticated: false,
}
const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED_USER: {
            return {
                authenticatedUser: action.user,
                authenticated: true,
            }
        }
        default:
            return state
    }
}

export default authenticationReducer
