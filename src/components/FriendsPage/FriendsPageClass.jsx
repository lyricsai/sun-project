import { NavLink } from 'react-router-dom'
import s from './FriendsPage.module.scss'
import * as axios from 'axios'
import logo from './../../logo.svg'
import React from 'react'


class FriendsPage extends React.Component {

    componentDidMount() {

        if (this.props.usersData.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
        }

    }
    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }

        return <div className={s.friendsPage} >

            <NavLink to="/friends" className={s.friendsLink}>
                <h3 className={s.friendsPageTitle} >Friends</h3>
            </NavLink>

            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : s.unselectedPage}
                        onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
                })}
            </div>

            <ul>{this.props.usersData.map(u => <li className={s.user__info} key={u.id} >

                <div className={s.user__toFollow}>
                    <div className={s.user__avatar_container}><img src={u.photos.small || u.avatar || logo} alt="avatar" /></div>
                    <span>
                        {u.followed
                            ? <button className={s.user__button} onClick={() => { this.props.unFollow(u.id) }}>Unfollow</button>
                            : <button className={s.user__button} onClick={() => { this.props.follow(u.id) }}>Follow</button>
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
}

export default FriendsPage