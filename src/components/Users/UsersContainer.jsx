import { follow, unFollow, setUsers, setTotalUsersCount, setCurrentPage, setUserProfile, toggleIsFetching } from '../../redux/usersPageReducer'
import { connect } from 'react-redux'
import Users from './Users'
import * as axios from 'axios'
import React from 'react'
import Preloader from '../common/Preloader/Preloader'



class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.usersData.length === 0) {
            this.props.toggleIsFetching(true)
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
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
        profile: state.usersPage.profile,
    }
}

export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setUserProfile, toggleIsFetching
})(UsersContainer)