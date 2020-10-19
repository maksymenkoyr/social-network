import React, {useEffect} from 'react'
import {initializeApp} from './actions'
import {connect} from 'react-redux'
import {initializationSelector} from './selectors'
import {Redirect} from 'react-router-dom'
import PageLoader from '../../ui/loaders/PageLoader'

const Initialization = ({
    noRedirect = false,
    children,
    initializeApp,
    initializationComplete,
    initializationFailed,
}) => {
    useEffect(() => {
        initializeApp()
    }, [])
    if (!initializationComplete && !initializationFailed) {
        return (
            <>
                <PageLoader />
            </>
        )
    } else if (initializationComplete || (initializationFailed && noRedirect)) {
        return children
    } else if (initializationFailed) {
        return <Redirect push to='/sign-in' />
    }
}

const mapStateToProps = state => ({
    ...initializationSelector(state),
})
export default connect(mapStateToProps, {initializeApp})(Initialization)
