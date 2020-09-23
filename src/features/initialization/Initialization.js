import React, {useEffect} from 'react'
import {initializeApp} from './actions'
import {connect} from 'react-redux'
import {initializationSelector} from './selectors'
import {Redirect} from 'react-router-dom'
import {CirkleLoader} from '../../ui'

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
    if (true) {
        // if (!initializationComplete && !initializationFailed) {
        return (
            <>
                <CirkleLoader center big blue />
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
