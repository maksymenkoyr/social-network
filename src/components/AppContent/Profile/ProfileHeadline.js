import React, {useState} from 'react'
import HeadlineForm from './HeadlineForm'
import ProfilePublications from './ProfilePublications'

const Profileheadline = ({setHeadline, profileHeadline}) => {
    const [editMode, setEditMode] = useState(false)
    const [headlineValue, setHeadlineValue] = useState(profileHeadline)

    return (
        <div
            onClick={() => setEditMode(true)}
            className={'profile-page__headline headline ' + (editMode ? 'headline--editing' : '')}
        >
            {editMode ? (
                <HeadlineForm
                    setHeadline={setHeadline}
                    setEditMode={setEditMode}
                    setHeadlineValue={setHeadlineValue}
                    profileHeadline={profileHeadline}
                    headlineValue={headlineValue}
                />
            ) : (
                <p className='headline__title'>{headlineValue}</p>
            )}
        </div>
    )
}

export default Profileheadline
