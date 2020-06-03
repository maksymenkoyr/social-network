const ADD_PUBLICATION = 'ADD_PUBLICATION'
const CHANGE_TEXT = 'CHANGE_TEXT'

let render
let store = {
    state: {
        profile: {
            publicationList: [
                {publicationContent: 'agagag'},
                {publicationContent: 'go go go'},
                {publicationContent: 'one'}
            ]
        },

        inputText: '',

        dispatch(action) {
            if (action.type === ADD_PUBLICATION) {
                this.profile.publicationList.push({publicationContent: this.inputText})
                this.inputText = ''
                render()
            } else if (action.type === CHANGE_TEXT) {
                       this.inputText = action.newValue
                       render()
                   }
        },

        createAction: {
            addPublicationActionCreator() {
                return {type: ADD_PUBLICATION}
            },
            changeTextActionCreator(text) {
                
                return{type: CHANGE_TEXT, newValue: text}
                
            }
        }
    }
}
export const subscribe = observer => {
    render = observer
}
export default store

window.state = store.state
