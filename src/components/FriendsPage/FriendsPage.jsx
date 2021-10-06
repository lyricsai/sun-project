import { NavLink } from 'react-router-dom'
import s from './FriendsPage.module.scss'
import * as axios from 'axios'
import logo from './../../logo.svg'



const FriendsPage = (props) => {

    let getUsers = () => {

        if (props.usersData.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

                props.setUsers(response.data.items)
            })
        }
    }

    return <div className={s.friendsPage} >

        <NavLink to="/friends" className={s.friendsLink}>
            <h3 className={s.friendsPageTitle} >Friends</h3>
        </NavLink>
        <button onClick={getUsers}>Get Users</button>
        <ul>{props.usersData.map(u => <li className={s.user__info} key={u.id} >

            <div className={s.user__toFollow}>
                <div className={s.user__avatar_container}><img src={u.photos.small || u.avatar || logo} alt="avatar" /></div>
                <span>
                    {u.followed
                        ? <button className={s.user__button} onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                        : <button className={s.user__button} onClick={() => { props.follow(u.id) }}>Follow</button>
                    }

                </span>
            </div>

            <div className={s.user__description}>
                <span className={s.user__firstName}>{u.name}</span>
                <span className={s.user__status}>{u.status}</span>
                <span className={s.user__location}>
                    {"u.location.city + ',' + u.location.country"}
                </span>
            </div>

        </li>)}</ul>

        <div className={s.friends__container}>
        </div>
    </div >
}

export default FriendsPage