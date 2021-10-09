import Users from './Users'
import UserItem from './UserItem/UserItem'
import { connect } from 'react-redux'
import { follow, unFollow, toggleFollow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, setUserProfile } from '../../redux/usersPageReducer'
import * as axios from 'axios'
import React from 'react'
import Preloader from '../common/Preloader/Preloader'


class UsersClass extends React.Component {

    componentDidMount() {

        if (this.props.usersData.length === 0) {
            this.props.toggleIsFetching(true)

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                    this.props.toggleIsFetching(false)
                })
        }

    }
    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render() {

        return (<>
            <div>
                {this.props.isFetching ? <Preloader /> : null}
            </div>
            <Users
                onPageChanged={this.onPageChanged}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                usersData={this.props.usersData}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                profile={this.props.profile}
                friendsElements={this.props.friendsElements}

            />
        </>)
    }
}

let mapStateToProps = (state) => {

    return {
        friendsElements: state.usersPage.friendsData.map(friend => <UserItem avatar={friend.avatar} key={friend.id} name={friend.name} />),
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        profile: state.usersPage.profile,

    }
}

export default connect(mapStateToProps,
    {
        follow,
        unFollow,
        toggleFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        setUserProfile,
    })
    (UsersClass)
