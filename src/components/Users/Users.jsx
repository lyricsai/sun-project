import s from './Users.module.scss'
import * as axios from 'axios'
import userAvatar from '../../images/useravatar.png'
import React from 'react'

class Users extends React.Component {

    componentDidMount() {
        if (this.props.usersData.length === 0) {


            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    debugger
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pages = []

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div className={s.users__container} >

                {this.props.usersData.map(u =>
                    <div className={s.users__user_container} key={u.id}>

                        <div className={s.users__avatar_follow}>
                            <div className={s.users__avatar}>
                                <img src={u.avatar || u.photos.large || u.photos.small || userAvatar} alt="avatar" />
                            </div>
                            <div className={s.users__follow}>
                                {(u.followed)
                                    ? <button onClick={() => { this.props.unFollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
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
                    return <li className={this.props.currentPage === p && s.users__page_selected}
                        onClick={(e) => { this.onPageChange(p) }}>{p}</li>
                })}
                </ul>
            </div>
        )
    }


}
export default Users