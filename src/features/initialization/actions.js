import {authenticateUserRequest} from '../../dal/dal'

export const INITIALIZATION_COMPLETE = 'INITIALIZATION_COMPLETE'
export function initializationComplete() {
    return {type: INITIALIZATION_COMPLETE}
}

export const INITIALIZATION_FAILED = 'INITIALIZATION_FAILED'
export function initializationFailed() {
    return {type: INITIALIZATION_FAILED}
}



export function initializeApp() {
    return function (dispatch) {
        authenticateUserRequest().then(response => {
            if (response.resultCode === 0) {
                dispatch(initializationComplete())
            } else {
                dispatch(initializationFailed())
            }
        })
    }
}
