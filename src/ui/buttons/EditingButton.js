import React from 'react'
import './EditingButton.scss'

const EditingButton = props => {
    return <div className={'editing-button ' + props.classes} onClick={props.OnEdit}></div>
}

export default EditingButton
