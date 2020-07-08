const {SET_AUTHENTICATED_USER, INITIALIZATION_FAILED} = require('./actions')

let initialState = {
    initializationComplete: false,
    initializationFailed: false,
    authenticatedUser: {},
}

const initializationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED_USER: {
            return {
                initializationFailed: false,
                initializationComplete: true,
                authenticatedUser: action.user,
            }
        }
        case INITIALIZATION_FAILED: {
            return {
                initializationComplete: true,
                initializationFailed: true,
            }
        }
        default:
            return state
    }
}

export default initializationReducer
