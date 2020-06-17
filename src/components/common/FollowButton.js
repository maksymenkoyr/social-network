import React from 'react'
import Button from '@material-ui/core/button'

const FollowButton = ({followed, waitForResponse, toggleFollow, className}) => {
    console.log(className)
    return (
        <Button
            className={className}
            size='small'
            disabled={waitForResponse}
            variant='contained'
            color='primary'
            onClick={toggleFollow}
        >
            {followed ? 'Unfollow' : 'Follow'}
        </Button>
    )
}

export default FollowButton
