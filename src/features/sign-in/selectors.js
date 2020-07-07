export const signInSelector = state => ({
    requestSent: state.signIn.requestSent,
    signInFailed: state.signIn.signInFailed,
    signInComplete: state.signIn.signInComplete,
})
