export const initializationSelector = state => ({
    initializationComplete: state.initialization.initializationComplete,
    initializationFailed: state.initialization.initializationFailed,
})

export const userIdSelector = state => state.initialization.authenticatedUser.id
