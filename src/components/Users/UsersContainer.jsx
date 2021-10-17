import { follow, unFollow, setUsers, setTotalUsersCount, setCurrentPage, setUserProfile, toggleIsFetching, toggleIsFollowing } from '../../redux/usersPageReducer'
import { connect } from 'react-redux'
import Users from './Users'
import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../api/api'




class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.usersData.length === 0) {
            this.props.toggleIsFetching(true)

            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.items)
                    this.props.setTotalUsersCount(response.totalCount)
                })
        }
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {

        return (
            <div>
                { this.props.isFetching ? <Preloader /> : null}
                <Users
                    onPageChange={this.onPageChange}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unFollow}
                    follow={this.props.follow}
                    usersData={this.props.usersData}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    toggleIsFollowing={this.props.toggleIsFollowing}
                    followingProgress={this.props.followingProgress}
                />
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,
        profile: state.usersPage.profile,
    }
}

export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setUserProfile, toggleIsFetching, toggleIsFollowing
})(UsersContainer)