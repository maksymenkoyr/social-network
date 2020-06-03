const ADD_PUBLICATION = 'ADD_PUBLICATION'
const CHANGE_TEXT = 'CHANGE_TEXT'

const profileReducer = (state, action) => {
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
