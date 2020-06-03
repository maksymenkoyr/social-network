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
            if (action.type === 'ADD_PUBLICATION') {
                this.profile.publicationList.push({publicationContent: this.inputText})
                this.inputText = ''
                render()
            } else if (action.type === 'INPUT_TEXT') {
                this.inputText = action.newValue
                render()
            }
        }
    }
}
export const subscribe = observer => {
    render = observer
}
export default store

window.state = store.state
