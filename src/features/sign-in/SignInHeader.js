import React, {useEffect, useRef, useState} from 'react'
import Button from '../../ui/buttons/ButtonWithAction'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import './SignInHeader.scss'
import {defineProfile} from '../profile'
import {signOutRequest} from '../../dal/dal'

const SignInHeader = props => {
    const [modalStatus, setModalStatus] = useState(false)
    const history = useHistory()
    const modal = useRef(null)
    useEffect(() => {
        defineProfile(props.authenticatedUser.id)
    })
    useEffect(() => {
        function handleClickOutside(ev) {
            if (modal.current && !modal.current.contains(ev.target)) {
                setModalStatus(false)
                console.log('fff')
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    })

    return (
        <>
            {props.initializationComplete ? (
                <div
                    ref={modal}
                    className='sign-in-header'
                    onClick={() => setModalStatus(!modalStatus)}
                >
                    <p>{props.authenticatedUser.login}</p>
                    <img
                        className='sign-in-header__photo'
                        src={props.userPhoto || require('../../lib/defaultAvatar.svg')}
                        alt='avatar'
                    ></img>
                    {modalStatus ? (
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
                                onClick={() =>
                                    signOutRequest().then(() => window.location.reload())
                                }
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
