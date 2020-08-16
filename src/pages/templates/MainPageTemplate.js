import React from 'react'
import './MainPageTemplate.scss'
import {Navigation} from '../../features/navigation'
import {SignInHeader} from '../../features/sign-in'
const MainPageTemplate = ({children, ...props}) => {
    return (
        <div className='main-page'>
            <header className='main-page__header'>
                <Navigation />
                <SignInHeader />
            </header>
            <main className='main-page__content'>{children}</main>
        </div>
    )
}

export default MainPageTemplate
