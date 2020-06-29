const {INITIALIZE} = require('../constants/actionTypes')

const initialState = {
    initialized: false,
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE: {
            

            return {
                initialized: true,
            }
        }
        default:
            return state
    }
}

export default globalReducer
