import UserAvatar from './UserAvatar/UserAvatar'
import s from './UserPage.module.scss'

let User = (props) => {
    return (<div className={s.userPage__itself}>

        <UserAvatar u={props.u} />

        User Info is here
    </div>)
}

export default User