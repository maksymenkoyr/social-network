import React, {useEffect, useState} from 'react'
import Button from '../../ui/buttons/ButtonWithAction'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import './SignInHeader.scss'
import {defineProfile} from '../profile'
import {signOutRequest} from '../../dal/dal'

const SignInHeader = props => {
    const [modal, setModal] = useState(false)
    const history = useHistory()
    useEffect(() => {
        defineProfile(props.authenticatedUser.id)
    })

    return (
        <>
            {props.initializationComplete ? (
                <div className='sign-in-header' onClick={() => setModal(!modal)}>
                    <p>{props.authenticatedUser.login}</p>
                    <img
                        className='sign-in-header__photo'
                        src={props.userPhoto || require('../../lib/defaultAvatar.svg')}
                        alt='avatar'
                    ></img>
                    {modal ? (
                        <div className='sign-in-modal'>
                            <div className='sign-in-modal__info'>
                                <img
                                    className='sign-in-modal__photo'
                                    src={props.userPhoto || require('../../lib/defaultAvatar.svg')}
                                    alt='avatar'
                                ></img>
                                <div>
                                    <p>
                                        <b>{props.authenticatedUser.login}</b>
                                    </p>
                                    <p>{props.authenticatedUser.email}</p>
                                </div>
                            </div>
                            <button className='sign-in-modal__my-profile-button '>
                                My profile
                            </button>
                            <button className='sign-in-modal__button'>Setting</button>
                            <button
                                className='sign-in-modal__button'
                                onClick={() => signOutRequest().then(window.location.reload())}
                            >
                                Log out
                            </button>
                        </div>
                    ) : null}
                </div>
            ) : (
                <Button action={() => history.push('/sign-in')}>Sign in</Button>
            )}
        </>
    )
}
const mapStateToProps = state => ({
    authenticatedUser: state.initialization.authenticatedUser,
    initializationComplete: state.initialization.initializationComplete,
    userPhoto: state.profile.profile.photos?.small,
})
export default connect(mapStateToProps, {})(SignInHeader)
