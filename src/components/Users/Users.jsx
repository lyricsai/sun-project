import s from './Users.module.scss'
import userAvatar from '../../images/useravatar.png'

const Users = (props) => {

    let pages = []

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
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
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
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

            <ul className={s.users__userPages}>pages
            {pages.map(p => {
                return <li className={props.currentPage === p && s.users__page_selected}
                    onClick={(e) => { props.onPageChange(p) }}>{p}</li>
            })}
            </ul>
        </div>
    )
}

export default Users