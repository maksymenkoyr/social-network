const {INITIALIZATION_COMPLETE, INITIALIZATION_FAILED} = require('./actions')

let initialState = {
    initializationComplete: false,
    initializationFailed: false,
}

const initializationReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_COMPLETE: {
            return {
                ...state,
                initializationComplete: true,
            }
        }
        case INITIALIZATION_FAILED: {
            return {
                ...state,
                initializationFailed: true,
            }
        }
        default:
            return state
    }
}

export default initializationReducer
