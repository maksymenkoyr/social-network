import React from 'react'
import {Initialization} from '../../features/initialization'
import MainPageTemplate from '../templates/MainPageTemplate'
import './HomePage.scss'

const HomePage = () => {
    return (
        <Initialization noRedirect>
            <MainPageTemplate>
                <div className='home-page'>
                    <b className='home-page__title'>Social Network</b>
                </div>
            </MainPageTemplate>
        </Initialization>
    )
}

export default HomePage
