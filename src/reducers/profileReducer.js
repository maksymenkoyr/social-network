import {ADD_PUBLICATION, CHANGE_PUBLICATION_INPUT, SET_CURRENT_USER} from '../constants/actionTypes'

let initialState = {
    publicationsList: [
        {publicationContent: 'agagag'},
        {publicationContent: 'go go go'},
        {publicationContent: 'one'},
    ],
    inputValue: '',
    currentUser: {},
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
        case SET_CURRENT_USER: {
            return {...state, currentUser: action.currentUser}
        }

        default:
            return state
    }
}

export default profileReducer
