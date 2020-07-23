import {addToFriendsRequest, removeFromFriendsREquest} from '../../../dal/dal'

export const SET_FRIENDSHIP_STATUS_AS_CHANGING = 'SET_FRIENDSHIP_STATUS_AS_CHANGING'
export function setFrienshipStatusAsChanging(userId) {
    return {
        type: SET_FRIENDSHIP_STATUS_AS_CHANGING,
        userId,
    }
}
export const ADD_USER_TO_FRIENDS = 'ADD_USER_TO_FRIENDS'
export function addUserToFriends(userId) {
    return {
        type: ADD_USER_TO_FRIENDS,
        userId,
    }
}
export const REMOVE_USER_FROM_FRIENDS = 'REMOVE_USER_FROM_FRIENDS'
export function removeUserFromFriends(userId) {
    return {
        type: REMOVE_USER_FROM_FRIENDS,
        userId,
    }
}
export const SET_FRIENDSHIP_STATUS = 'SET_FRIENDSHIP_STATUS'
export function setFrienshipStatus(userId, friendshipStatus) {
    return {
        type: friendshipStatus ? ADD_USER_TO_FRIENDS : REMOVE_USER_FROM_FRIENDS,
    }
}

export function toggleFrienshipStatus(userId, friendshipStatus) {
    return function (dispatch) {
        dispatch(setFrienshipStatusAsChanging(userId))
        if (friendshipStatus) {
            addToFriendsRequest(userId).then(response => {
                if (response.resultCode === 0) {
                    dispatch(addUserToFriends(userId))
                }
            })
        } else {
            removeFromFriendsREquest(userId).then(response => {
                if (response.resultCode === 0) {
                    dispatch(removeUserFromFriends(userId))
                }
            })
        }
    }
}
