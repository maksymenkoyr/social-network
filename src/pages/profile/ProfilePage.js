import React from 'react'
import MainPageTemplate from '../templates/MainPageTemplate'
import {Initialization} from '../../features/initialization'
import {Profile} from '../../features/profile'

const ProfilePage = () => {
    return (
        <Initialization>
            <MainPageTemplate>
                <Profile />
            </MainPageTemplate>
        </Initialization>
    )
}

export default ProfilePage
