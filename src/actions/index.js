import {ADD_PUBLICATION, CHANGE_PUBLICATION_INPUT} from '../constants/actionTypes'

export const addPublication = () => {
    return {type: ADD_PUBLICATION}
}

export const changePublication = value => {
    return {type: CHANGE_PUBLICATION_INPUT, value: value}
}
