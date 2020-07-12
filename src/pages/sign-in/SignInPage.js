import React from 'react'
import {connect} from 'react-redux'
import {signInSelector, logIn} from '../../features/sign-in'
import SignInPageModel from './SignInPageModel'
import {Initialization} from '../../features/initialization'

const SignInPage = props => {
    return (
        <div>
            <Initialization>
                <SignInPageModel {...props} />
            </Initialization>
        </div>
    )
}
const mapStateToProps = state => ({
    ...signInSelector(state),
})
export default connect(mapStateToProps, {logIn})(SignInPage)
