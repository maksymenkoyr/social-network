import axios from 'axios'
//---------Authentication--------
const sampleRequest = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '97f5b938-e7eb-4074-8770-937b717465c8',
    },
    withCredentials: true,
})

export const authenticateUserRequest = () => {
    return sampleRequest.get('auth/me').then(response => response.data)
}

//---------Sign-in-----------------------

export const signInRequest = data => {
    return sampleRequest.post('auth/login', {...data}).then(response => response.data)
}

export const getCaptchaRequest = () => {
    return sampleRequest.get('security/get-captcha-url').then(response => response.data)
}
//-----------Profile-----------

export const getProfileRequest = userId => {
    return sampleRequest.get(`/profile/${userId}`).then(response => response.data)
}

export const setProfilePhotoRequest = img => {
    return sampleRequest.post('profile/photo', img)
}

//-----------Users----------------

export const getUsersRequest = pageNumber => {
    return sampleRequest.get(`/users?count=10&page=${pageNumber}`).then(response => response.data)
}

export const addToFriendsRequest = userId => {
    return sampleRequest.post(`/follow/${userId}`).then(request => request.data)
}
export const removeFromFriendsREquest = userId => {
    return sampleRequest.delete(`/follow/${userId}`).then(request => request.data)
}
