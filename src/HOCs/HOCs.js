import React from 'react'
import {Redirect} from 'react-router-dom'

export const addRedirectForNonAuthorized = Component => {
    return props => {
        if (props.authenticatedUser) {
            return <Redirect push to='/login' />
        } else {
            return <Component {...props}></Component>
        }
    }
}
