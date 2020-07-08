import {authenticateUserRequest} from '../../dal/dal'

export const SET_AUTHENTICATED_USER = 'SET_AUTHENTICATED_USER'
export function setAuthenticatedUser(user) {
    return {
        type: SET_AUTHENTICATED_USER,
        user,
    }
}

export const INITIALIZATION_FAILED = 'INITIALIZATION_FAILED'
export function initializationFailed() {
    return {type: INITIALIZATION_FAILED}
}

export function initializeApp() {
    return function (dispatch) {
        authenticateUserRequest().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthenticatedUser(response.data))
            } else {
                dispatch(initializationFailed())
            }
        })
    }
}
