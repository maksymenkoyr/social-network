import {signInRequest} from '../../dal/dal'

export const SIGN_IN_REQUEST_SENT = 'SIGN_IN_REQUEST_SENT'
export function signInRequestSent() {
    return {
        type: SIGN_IN_REQUEST_SENT,
    }
}
export const SIGN_IN_COMPLETE = 'SING_IN_COMPLETE'
export function signInComplete() {
    return {
        type: SIGN_IN_COMPLETE,
    }
}
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED'
export function signInFailed() {
    return {
        type: SIGN_IN_FAILED,
    }
}

export const CLEAN_SIGN_IN_STATE = 'CLEAN_SIGN_IN_STATE'
export function cleanSignInState() {
    return {type: CLEAN_SIGN_IN_STATE}
}

export function logIn(requestData) {
    return function (dispatch) {
        dispatch(cleanSignInState())
        dispatch(signInRequestSent())
        signInRequest(requestData).then(response => {
            if (response.resultCode === 0) {
                dispatch(signInComplete())
            } else {
                dispatch(signInFailed())
            }
        })
    }
}
