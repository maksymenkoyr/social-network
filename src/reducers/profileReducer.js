import {
    ADD_PUBLICATION,
    CHANGE_PUBLICATION_INPUT,
    SET_CURRENT_PROFILE,
    SET_PROFILE_LOADED,
    SET_AUTHENTICATED_USER,
    SET_HEADLINE,
} from '../constants/actionTypes'

let initialState = {
    publicationsList: [
        {publicationContent: 'agagag'},
        {publicationContent: 'go go go'},
        {publicationContent: 'one'},
    ],
    headline: '',
    profile: {},
    profileLoaded: false,
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PUBLICATION:
            let newState = {...state}
            newState.publicationsList = [...state.publicationsList]
            newState.publicationsList.push({publicationContent: state.inputValue})
            newState.inputValue = ''
            return newState
        case CHANGE_PUBLICATION_INPUT: {
            let newState = {...state}
            newState.inputValue = action.value
            return newState
        }
        case SET_CURRENT_PROFILE: {
            return {...state, profile: action.currentProfile}
        }
        case SET_PROFILE_LOADED: {
            return {
                ...state,
                profileLoaded: action.loaded,
            }
        }
        case SET_HEADLINE: {
            return {
                ...state,
                headline: action.headline,
            }
        }
        default:
            return state
    }
}

export default profileReducer
