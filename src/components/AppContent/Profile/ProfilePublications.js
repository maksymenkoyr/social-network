import React from 'react'
import Publication from '../Publication'
import {createAction} from '../../../redux/profileReducer'
console.log(createAction)
const ProfilePublications = ({state, dispatch}) => {
    const publications = state.publicationList.map(item => (
        <Publication publicationContent={item.publicationContent} />
    ))
    const ref = React.createRef()
    return (
        <div className='profile__publication'>
            <textarea
                value={state.inputText}
                ref={ref}
                type='arialabel'
                className='publication__input'
                onChange={() => {
                    dispatch(createAction.changeTextActionCreator(ref.current.value))
                }}
            ></textarea>
            <button
                onClick={() => {
                    dispatch(createAction.addPublicationActionCreator())
                }}
            >
                add
            </button>
            <ul className='profile__publication-list'>{publications}</ul>
        </div>
    )
}

export default ProfilePublications
