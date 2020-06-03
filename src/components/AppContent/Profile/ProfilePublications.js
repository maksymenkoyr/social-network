import React from 'react'
import Publication from '../Publication'

const ProfilePublications = props => {
    const publications = props.state.profile.publicationList.map(item => (
        <Publication publicationContent={item.publicationContent} />
    ))
    const ref = React.createRef()

    return (
        <div className='profile__publication'>
            <input
                value={props.state.inputText}
                ref={ref}
                type='arialabel'
                className='publication__input'
                onChange={() => {
                    props.state.dispatch({type:"INPUT_TEXT", newValue: ref.current.value})
                }}
            ></input>
            <button
                onClick={() => {
                    props.state.dispatch({type:"ADD_PUBLICATION"})
                }}
            >
                add
            </button>
            <ul className='profile__publication-list'>{publications}</ul>
        </div>
    )
}

export default ProfilePublications
