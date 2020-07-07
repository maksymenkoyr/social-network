import React from 'react'
import {connect} from 'react-redux'
import {signInSelector, logIn} from '../../features/sign-in'
import SignInPageModel from './SignInPageModel'

const SignInPage = props => {
    return (
        <div>
            <SignInPageModel {...props} />
        </div>
    )
}
const mapStateToProps = state => ({
    ...signInSelector(state),
})
export default connect(mapStateToProps, {logIn})(SignInPage)
