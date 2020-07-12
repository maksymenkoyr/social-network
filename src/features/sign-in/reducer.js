import {
    SIGN_IN_REQUEST_SENT,
    SIGN_IN_COMPLETE,
    SIGN_IN_FAILED,
    CLEAN_SIGN_IN_STATE,
} from './actions'
let initialState = {
    requestSent: false,
    signInComplete: false,
    signInFailed: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAN_SIGN_IN_STATE: {
            return initialState
        }
        case SIGN_IN_REQUEST_SENT: {
            return {
                ...state,
                requestSent: true,
            }
        }
        case SIGN_IN_COMPLETE: {
            return {
                ...state,
                signInComplete: true,
            }
        }
        case SIGN_IN_FAILED: {
            return {
                ...state,
                signInFailed: true,
            }
        }
        default:
            return state
    }
}

export default reducer
