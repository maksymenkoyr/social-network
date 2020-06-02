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
        inputText: "",

        addPublication() {
            this.profile.publicationList.push({publicationContent: this.inputText})
            this.inputText = ""
            render()
        },
        changeInputValue(value) {
            this.inputText = value
            render()
        }
    }
}
export const subscribe = (observer) =>{
    render = observer
}
export default store

window.state = store.state
