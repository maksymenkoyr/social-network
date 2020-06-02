import React from 'react'

const Publication = props => {
    return (
        <li className='publication'>
            <div className='publication__author'></div>
            <div className='publication__content'>{props.publicationContent}</div>
        </li>
    )
}

export default Publication
