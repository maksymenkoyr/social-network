/* eslint-disable default-case */
import React, {useState} from 'react'
import {facebook} from '../../lib/constants'
import './SocialNetworkButton.scss'

const SocialNetworkButton = ({url, socialNetwork}) => {
    return (
        <a href={url}>
            <div className={'social-network-button social-network-button--' + socialNetwork}>
                {facebook}
            </div>
        </a>
    )
}

export default SocialNetworkButton
