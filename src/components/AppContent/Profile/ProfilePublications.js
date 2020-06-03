import React from 'react'
import Publication from '../Publication'

const ProfilePublications = ({state}) => {
    const publications = state.profile.publicationList.map(item => (
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
                    state.dispatch(state.createAction.changeTextActionCreator(ref.current.value))
                }}
            ></textarea>
            <button
                onClick={() => {
                    state.dispatch(state.createAction.addPublicationActionCreator())
                }}
            >
                add
            </button>
            <ul className='profile__publication-list'>{publications}</ul>
        </div>
    )
}

export default ProfilePublications
