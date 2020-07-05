export const initializationSelector = state => ({
    initializationComplete: state.initialization.initializationComplete,
    initializationFailed: state.initialization.initializationFailed,
})
