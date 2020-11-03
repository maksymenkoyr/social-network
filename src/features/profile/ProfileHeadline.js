import React, {useEffect, useState} from 'react'
import {getProfileHeadlineRequest} from '../../dal/dal'

const ProfileHeadline = () => {
    const [headlineText, setHeadlineText] = useState()
    useEffect(() => {
        // getProfileHeadlineRequest.then(response => setHeadlineText(response))
    }, [])
    return <div></div>
}

export default ProfileHeadline
