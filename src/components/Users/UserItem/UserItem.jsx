import Preloader from '../../common/Preloader/Preloader'
import UserContainer from '../User/UserContainer'
import styles from './UserItem.module.scss'


const UserItem = (props) => {

    debugger

    if (!props.profile) {
        return <span><Preloader /></span>
    }

    return (
        < div className={styles.friendsItem} >


            WTF


            {/* <UserContainer u={props.u} /> */}


            {/* <ul>{props.usersData.map(u => <li className={s.user__info} key={u.id} >

                <div className={s.user__toFollow}>
                    <NavLink to={'/profile/' + u.id}>
                        <UserAvatar u={u} />
                        <UserContainer u={u} />
                    </NavLink>

           //     button follow/unfollow 


                    <span>
                        {u.followed
                            ? <button className={s.user__button} onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                            : <button className={s.user__button} onClick={() => { props.follow(u.id) }}>Follow</button>
                        }
                    </span>
                </div>


          //user profile info 


                <div className={s.user__description}>
                    <span className={s.user__firstName}>{u.name}</span>
                    <span className={s.user__status}>{u.status}</span>
                    <span className={s.user__location}>
                        {"u.location.city + ',' + u.location.country"}
                    </span>
                </div>

            </li>)}</ul> */}




        </ div>

    )
}
export default UserItem