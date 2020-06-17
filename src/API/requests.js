import * as axios from 'axios'
import {REQUEST} from '../constants/serverAPI'

const baseRequest = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '97f5b938-e7eb-4074-8770-937b717465c8',
    },
    withCredentials: true,
})

export const getUsersRequest = (currentPage = 1, pageSize = 5) => {
    return baseRequest
        .get(REQUEST + `users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}
export const getProfileRequest = userId => {
    return baseRequest.get(`profile/${userId}`).then(response => {
        return response.data
    })
}

export const follow = userId => {
    return baseRequest.post(`follow/${userId}`)
}
export const unFollow = userId => {
    return baseRequest.delete(`follow/${userId}`)
}
export const followStatus = userId => {
    return baseRequest.get(`follow/${userId}`).then(response => {
        return response.data
    })
}

export const authenticationRequest = () => {
    return baseRequest.get('auth/me').then(response => {
        return response.data.data
    })
}
