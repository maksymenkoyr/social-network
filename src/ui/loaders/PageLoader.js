import React from 'react'
import './PageLoader.scss'

const PageLoader = () => {
    return (
        <div class='page-loader'>
            <p class='page-loader__title'>Social Network</p>
            <div className='page-loader__loader'>
                <div></div>
            </div>
        </div>
    )
}

export default PageLoader
