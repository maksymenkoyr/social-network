import {getProfileRequest} from '../../dal/dal'

export const SET_PROFILE = 'SET_PROFILE'
export function setProfile(profile) {
    return {
        type: SET_PROFILE,
        profile,
    }
}

export function defineProfile(userId) {
    return function (dispatch) {
        getProfileRequest(userId).then(response => {
            dispatch(setProfile(response))
        })
    }
}
