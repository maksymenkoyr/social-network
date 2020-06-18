import React from 'react'
import Button from '@material-ui/core/button'

const FollowButton = ({followed, loadingStatus, toggleFollow, className, userId}) => {
    return (
        <Button
            className={className}
            size='small'
            disabled={loadingStatus}
            variant='contained'
            color='primary'
            onClick={() => {
                toggleFollow(userId, followed)
            }}
        >
            {followed ? 'Unfollow' : 'Follow'}
        </Button>
    )
}

export default FollowButton
