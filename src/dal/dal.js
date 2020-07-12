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

export const signInRequest = ({email, password, rememberMe}) => {
    return sampleRequest
        .post('auth/login', {email, password, rememberMe})
        .then(response => response.data)
}
//-----------Profile-----------

export const getProfileRequest = userId => {
    return sampleRequest.get(`/profile/${userId}`).then(response => response.data)
}
