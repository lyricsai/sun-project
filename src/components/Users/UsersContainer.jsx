import { follow, unFollow, setUsers, setTotalUsersCount, setCurrentPage, setUserProfile, toggleIsFetching } from '../../redux/usersPageReducer'
import { connect } from 'react-redux'
import Users from './Users'



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
})(Users)