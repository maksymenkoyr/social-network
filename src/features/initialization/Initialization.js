import React, {useEffect} from 'react'
import {initializeApp} from './actions'
import {connect} from 'react-redux'
import {initializationSelector} from './selectors'
import {Redirect} from 'react-router-dom'
<<<<<<< HEAD
import PageLoader from '../../ui/loaders/PageLoader'
=======
import {CirkleLoader} from '../../ui'
>>>>>>> d4dc85e6fd26e423f2cc02727ca15aa9617641d1

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
<<<<<<< HEAD
    if (!initializationComplete && !initializationFailed) {
        return (
            <>
                <PageLoader />
=======
    if (true) {
        // if (!initializationComplete && !initializationFailed) {
        return (
            <>
                <CirkleLoader center big blue />
>>>>>>> d4dc85e6fd26e423f2cc02727ca15aa9617641d1
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
