import s from './UserAvatar.module.scss'
import logo from './../../../../logo.svg'

let UserAvatar = (props) => {

    return (<div>
        <div className={s.user__avatar_container}><img src={props.u.photos.small || props.u.avatar || logo} alt="avatar" /></div>

    </div>)
}

export default UserAvatar