import React from 'react'
import "./Messages.scss"

const Messages = () => {
    return (
        <main className='app__content messages'>
            <ul className='conversation'>
                <li className='conversation__message'>HI</li>
                <li className='conversation__message'>By</li>
                <li className='conversation__message'>You</li>
                <li className='conversation__message'>are</li>
                <li className='conversation__message'>mine</li>
            </ul>
            <ul className='conversations-list'>
                <li className='conversations-list__item'>Tom</li>
                <li className='conversations-list__item'>Bom</li>
                <li className='conversations-list__item'>Jom</li>
            </ul>
        </main>
    )
}

export default Messages
