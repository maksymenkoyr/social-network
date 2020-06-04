import React from 'react'
import Publication from '../Publication'
import {createAction} from '../../../redux/profileReducer'
const ProfilePublications = (props) => {
    const publications = props.profileState.publicationList.map(item => (
        <Publication publicationContent={item.publicationContent} />
    ))
    const ref = React.createRef()
    return (
        <div className='profile__publication'>
            <textarea
                value={props.profileState.inputText}
                ref={ref}
                type='arialabel'
                className='publication__input'
                onChange={() => {
                    props.dispatch(createAction.changeTextActionCreator(ref.current.value))
                }}
            ></textarea>
            <button
                onClick={() => {
                    props.dispatch(createAction.addPublicationActionCreator())
                }}
            >
                add
            </button>
            <ul className='profile__publication-list'>{publications}</ul>
        </div>
    )
}

export default ProfilePublications
