import React from 'react'
import './PageLoader.scss'

const PageLoader = () => {
    return (
        <div className='page-loader'>
            <p className='page-loader__title'>Social Network</p>
            <div className='page-loader__loader'>
                <div></div>
            </div>
        </div>
    )
}

export default PageLoader
