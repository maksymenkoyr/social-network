import React from 'react'
import {Initialization} from '../../features/initialization'
import MainPageTemplate from '../templates/MainPageTemplate'
import {Users} from '../../features/users'
import './UsersPage.scss'

const UsersPage = () => {
    return (
        <Initialization>
            <MainPageTemplate>
                <div className='users-page'>
                    <Users />
                </div>
            </MainPageTemplate>
        </Initialization>
    )
}

export default UsersPage
