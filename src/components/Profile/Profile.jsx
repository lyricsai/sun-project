import React from 'react'
import s from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import userAvatar from '../../images/useravatar.png'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} />
        </div>
    )
}

export default Profile