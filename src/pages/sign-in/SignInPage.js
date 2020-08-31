import React from 'react'
import {connect} from 'react-redux'
import {signInSelector, logIn} from '../../features/sign-in'
import SignInPageModel from './SignInPageModel'
import {Initialization} from '../../features/initialization'

const SignInPage = props => {
    return (
        <Initialization noRedirect>
            <SignInPageModel {...props} />
        </Initialization>
    )
}
const mapStateToProps = state => ({
    ...signInSelector(state),
})

export default connect(mapStateToProps, {logIn})(SignInPage)
