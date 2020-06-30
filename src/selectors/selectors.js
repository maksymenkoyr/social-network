//---------------Initialization-----------------
export const getInitStatus = state => {
    return state.global.initialized
}
//------------- Authentication-------------------
export const getAuthenticatedUser = state => {
    return state.authentication.authenticatedUser
}

export const getAuthenticationStatus = state => {
    return state.authentication.authenticated
}
//--------------Profile------------------------------
export const getProfileSmallPhoto = state => {
    return state.profilePage.currentProfile.photos.small
}
