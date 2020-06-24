import React from 'react'
import TextField from '@material-ui/core/TextField'

export const Input = ({meta, input, ...props}) => {
    console.log(meta)
    return (
        <TextField
            {...input}
            error={meta.touched}
            id='outlined-basic'
            label='Outlined'
            variant='outlined'
        />
    )
}
