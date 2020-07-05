import React, {useEffect} from 'react'
import {initializeApp} from './actions'
import {connect} from 'react-redux'
import {initializationSelector} from './selectors'

const Initialization = ({children, initializeApp, ...props}) => {
    useEffect(() => {
        initializeApp()
    }, [])
    return <div></div>
}

const mapStateToProps = store => ({
    ...initializationSelector(store),
})
export default connect(mapStateToProps, {initializeApp})(Initialization)
