import s from './ProfileInfo.module.scss'
import Preloader from '../../common/Preloader/Preloader'
import userAvatar from '../../../images/useravatar.png'


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }


    let ContactsElements = Object.entries(props.profile.contacts).map(([key, value], c) => {
        if ([value] != '') return (
            <li className={s.contacts__item}>
                <a href={`https://${value}`} target='_blank' rel="noreferrer" className={s.contacts__link}>
                    {`${key}`}
                </a>
            </li>
        )
    }
    );

    return (
        <div >
            <div className={s.profile__userId}>{props.profile.userId}</div>
            <div className={s.profile__about_user}>{props.profile.aboutMe}</div>

            <div className={s.profile__photo_container}>
                <img src={props.profile.photos.large || props.profile.photos.small || userAvatar} alt="avatar" />
            </div>
            <div className={s.profile__job_search}>{props.profile.lookingForAJob}</div>
            <div className={s.profile__job_description}>{props.profile.lookingForAJobDescription}</div>
            <div className={s.profile__full_name}>{props.profile.fullName}</div>
            <ul className={s.profile__contacts}>Contacts


                {ContactsElements}


            </ul >


        </div >
    )
}

export default ProfileInfo