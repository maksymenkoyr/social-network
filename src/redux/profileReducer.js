const ADD_PUBLICATION = 'ADD_PUBLICATION'
const CHANGE_TEXT = 'CHANGE_TEXT'

let initialState = {
    publicationList: [
        {publicationContent: 'agagag'},
        {publicationContent: 'go go go'},
        {publicationContent: 'one'}
    ],
    inputText: ''
}
const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_PUBLICATION) {
        state.publicationList.push({publicationContent: state.inputText})
        state.inputText = ''
        return state
    } else if (action.type === CHANGE_TEXT) {
        state.inputText = action.newValue
        return state
    } else {
        return state
    }
}
export const createAction = {
            addPublicationActionCreator() {
                return {type: ADD_PUBLICATION}
            },
            changeTextActionCreator(text) {
                return {type: CHANGE_TEXT, newValue: text}
            }
        }

export default profileReducer
