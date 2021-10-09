import { NavLink } from 'react-router-dom'
import s from './UsersPage.module.scss'
import UserAvatar from './User/UserAvatar/UserAvatar'
// import UserContainer from './User/UserContainer'



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.friendsPage} >

        <NavLink to="/friends" className={s.friendsLink}>
            <h3 className={s.friendsPageTitle} >Friends</h3>
        </NavLink>

        <div>{props.friendsElements}</div>
        {/* users mapping */}
        <ul>{props.usersData.map(u => <li className={s.user__info} key={u.id} >

            <div className={s.user__toFollow}>
                <NavLink to={'/profile/' + u.id}>
                    <UserAvatar u={u} />
                </NavLink>

                {/* button follow/unfollow */}
                <span>
                    {u.followed
                        ? <button className={s.user__button} onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                        : <button className={s.user__button} onClick={() => { props.follow(u.id) }}>Follow</button>
                    }
                </span>
            </div>
            {/* user profile info */}
            <div className={s.user__description}>
                <span className={s.user__firstName}>{u.name}</span>
                <span className={s.user__status}>{u.status}</span>
                <span className={s.user__location}>
                    {"u.location.city + ',' + u.location.country"}
                </span>
            </div>

        </li>)}</ul>


        {/* pagination */}
        <ul>
            {pages.map(p => {
                return <li className={props.currentPage === p ? s.selectedPage : s.unselectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</li>
            })}
        </ul>

    </div >
}


export default Users