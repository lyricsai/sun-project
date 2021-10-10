import s from './Users.module.scss'
import * as axios from 'axios'
import userAvatar from '../../images/useravatar.png'


const Users = (props) => {


    if (props.usersData.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })


    }

    return (
        <div className={s.users__container} >

            {props.usersData.map(u =>
                <div className={s.users__user_container} key={u.id}>

                    <div className={s.users__avatar_follow}>
                        <div className={s.users__avatar}>
                            <img src={u.avatar || u.photos.large || u.photos.small || userAvatar} alt="avatar" />
                        </div>
                        <div className={s.users__follow}>
                            {(u.followed)
                                ? <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                            }
                        </div>
                    </div>

                    <div className={s.users__description}>
                        <span className={s.users__name}>{u.name}</span>
                        <span className={s.users__location}> {/*{u.location.city},<br />{u.location.country} */}location</span>
                        <span className={s.users__status}>{u.status}</span>
                    </div>

                </div>
            )}

            <button>Show More</button>
        </div>
    )
}
export default Users