import React, {useState} from 'react'

const EditProfilePhoto = props => {
    const [photo, setPhoto] = useState()
    return (
        <div className='edit-photo-modal'>
            <div className='edit-photo-modal__content'>
                <h3>Uppload new photo</h3>
                <input
                    type='file'
                    onChange={event => {
                        setPhoto(event.target.files[0])
                    }}
                ></input>
                <img
                    className='edit-photo-modal__img'
                    // src={window.URL.createObjectURL(photo)}
                ></img>
                <button
                    onClick={() => {
                        const formData = new FormData()
                        formData.append('image', photo)
                        props.setProfilePhoto(formData)
                    }}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default EditProfilePhoto
