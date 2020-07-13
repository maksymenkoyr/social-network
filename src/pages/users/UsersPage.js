import React from 'react'
import {Initialization} from '../../features/initialization'
import MainPageTemplate from '../templates/MainPageTemplate'
import {Users} from '../../features/users'

const UsersPage = () => {
    return (
        <Initialization>
            <MainPageTemplate>
                <Users />
            </MainPageTemplate>
        </Initialization>
    )
}

export default UsersPage
