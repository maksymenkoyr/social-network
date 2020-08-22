import React, {useState} from 'react'

const EditProfilePhoto = props => {
    const [photo, setPhoto] = useState()
    const [imgSrc, setImgSrc] = useState()

    return (
        <div className='edit-photo-modal'>
            <div className='edit-photo-modal__content'>
                <h3>Uppload new photo</h3>
                <input
                    type='file'
                    onChange={event => {
                        setPhoto(event.target.files[0])
                        const reader = new FileReader()
                        reader.readAsDataURL(event.target.files[0])
                        reader.onload = () => {
                            setImgSrc(reader.result)
                        }
                        setImgSrc(reader.result)
                    }}
                ></input>
                <img className='edit-photo-modal__img' src={imgSrc}></img>
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
