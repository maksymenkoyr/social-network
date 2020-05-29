import React from 'react'

const Publication = (props) => {
    return (
        <li className="publication">
            <div className="publication__author">{props.content}</div>
            <div className="publication__content"></div>
        </li>
            
        
    )
}

export default Publication
