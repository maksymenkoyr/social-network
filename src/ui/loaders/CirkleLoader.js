import React from 'react'
import './CirkleLoader.scss'

const CirkleLoader = ({big, blue, center}) => {
    return (
        <div
            className={
                'cirkle-loader ' +
                (big ? 'cirkle-loader--big ' : null) +
                (blue ? 'cirkle-loader--blue ' : null) +
                (center ? 'cirkle-loader--center ' : null)
            }
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default CirkleLoader
