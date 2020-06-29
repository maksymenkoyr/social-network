export const getAuthenticatedUser = state => {
    return state.authentication.authenticatedUser
}
export const getAuthenticated = state => {
    return state.authentication.authenticated
}

export const getInitialize = state => {
    return state.global.initialized
}
