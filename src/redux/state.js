import profileReducer from './profileReducer'


let store = {
    state: {
        profile: {
            publicationList: [
                {publicationContent: 'agagag'},
                {publicationContent: 'go go go'},
                {publicationContent: 'one'}
            ],
            inputText: ''
        },

        callsubscriber() {
            console.log('callsubscriber')
        },
        dispatch(action) {
            this.profile = profileReducer(this.profile, action)
            this.callsubscriber(this)
        },
        getState() {
            return this
        },

        subscribe(observer) {
            this.callsubscriber = observer
        }
    }
}
export default store

window.state = store.state
