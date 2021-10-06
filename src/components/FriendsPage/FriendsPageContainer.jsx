import FriendsPage from './FriendsPageClass'
import FriendItem from './FriendItem/FriendItem'
import { connect } from 'react-redux'
import { followAC, unFollowAC, toggleFollowAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC } from '../../redux/friendsPageReducer'

let mapStateToProps = (state) => {

    return {
        friendsElements: state.friendsPage.friendsData.map(friend => <FriendItem avatar={friend.avatar} key={friend.id} name={friend.name} />),
        usersData: state.friendsPage.usersData,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unFollow: (userId) => { dispatch(unFollowAC(userId)) },
        toggleFollow: (userId) => { dispatch(toggleFollowAC(userId)) },
        setUsers: (usersData) => { dispatch(setUsersAC(usersData)) },
        setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)) },
        setTotalUsersCount: (totalUsersCount) => { dispatch(setTotalUsersCountAC(totalUsersCount)) },
    }
}

let FriendsPageContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsPage)

export default FriendsPageContainer