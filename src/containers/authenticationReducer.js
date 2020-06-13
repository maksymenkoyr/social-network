import { AUTHENTICATION } from "../constants/actionTypes"

let initialState = {
    authenticatedUser: {
        id: null,
        email: null,
        login: null,
    },
    authenticationStatus: false,
}

const authenticationReducer = (state=initialState, action) => {
    switch(action.type){
        case AUTHENTICATION:
            return({
                authenticatedUser: {
                    id: action.id,
                    email: action.email,
                    login: action.login
                },
                authenticationStatus: true
            })
        default:
            return state
    }
}