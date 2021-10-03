import { NavLink } from 'react-router-dom';
import s from './FriendsPage.module.scss'


const FriendsPage = (props) => {
    debugger
    return <div className={s.friendsPage} >
        <NavLink to="/friends" className={s.friendsLink}>
            <h3 className={s.friendsPageTitle} >Friends</h3>
        </NavLink><ul>{props.usersData.map(u => <li className={s.user__info} key={u.id} >

            <div className={s.user__toFollow}>
                <div className={s.user__avatar_container}><img src={u.avatar} alt="avatar" /></div>

                <span>
                    {u.following
                        ? <button onClick={() => { props.toggleFollow(u.id) }} className={s.user__button} >Unfollow</button>
                        : <button onClick={() => { props.toggleFollow(u.id) }} className={s.user__button} >Follow</button>
                    }
                </span>
            </div>

            <div className={s.user__description}>
                <span className={s.user__firstName}>{u.firstName}</span>
                <span className={s.user__status}>{u.status}</span>
                <span className={s.user__location}>{u.location.city + ',' + u.location.country}</span>
            </div>

        </li>)}</ul>

        <div className={s.friends__container}>
        </div>
    </div>
}

export default FriendsPage