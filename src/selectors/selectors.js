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
export const getProfile = state => {
    return state.profilePage.profile
}

export const getProfileSmallPhoto = state => {
    return state.profilePage.profile.photos.small
}

export const getProfileLoaded = state => {
    return state.profilePage.profileLoaded
}

export const getProfileHeadline = state => {
    return state.profilePage.headline
}