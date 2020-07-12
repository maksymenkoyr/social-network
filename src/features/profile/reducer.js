const {SET_PROFILE} = require('./actions')

let initialState = {
    profileDefine: false,
    profile: {},
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                profile: action.profile,
                profileDefine: true,
            }
        }
        default:
            return state
    }
}
