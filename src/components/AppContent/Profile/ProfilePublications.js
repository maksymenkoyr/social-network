import React from 'react'
import Publication from '../Publication'
const ProfilePublications = ({publicationsList,inputValue,addPublication, updateInput}) => {
    const publications = publicationsList.map(item => (
        <Publication publicationContent={item.publicationContent} />
    ))
    
    return (
        <div className='profile__publication'>
            <textarea
                value={inputValue}
                type='arialabel'
                className='publication__input'
                onChange={(e) => {
                    updateInput(e.currentTarget.value)
                }}
            ></textarea>
            <button
                onClick={() => {
                    addPublication()
                }}
            >
                add
            </button>
            <ul className='profile__publication-list'>{publications}</ul>
        </div>
    )
}

export default ProfilePublications
