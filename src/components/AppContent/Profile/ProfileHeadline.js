import React, {useState} from 'react'
import HeadlineForm from './HeadlineForm'

const Profileheadline = () => {
    const [editMode, setEditMode] = useState(false)
    const [headlineValue, setHeadlineValue] = useState()

    return (
        <div
            onClick={() => setEditMode(true)}
            className={'profile-page__headline headline ' + (editMode ? 'headline--editing' : '')}
        >
            {editMode ? (
                <HeadlineForm setEditMode={setEditMode} setHeadlineValue={setHeadlineValue} />
            ) : (
                <p className='headline__title'>{headlineValue}</p>
            )}
        </div>
    )
}

export default Profileheadline
